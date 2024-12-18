import { ConflictException, ForbiddenException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/user/user.entity';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { RequestLogs } from 'src/common/requestLog.entity';

@Injectable()

export class AuthService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
        @InjectModel(RequestLogs.name) private readonly logModel: Model<RequestLogs>,

        private readonly jwtService: JwtService,
    ) { }

    async createUser(userBody: RegisterDto): Promise<any> {
        try {
            let userExists: RegisterDto
            userExists = await this.userModel.findOne({ email: userBody.email })
            let userExistsusername = await this.userModel.findOne({ username: userBody.username })
            if (userExists) {
                throw new ConflictException("email already exists")
            }

            if (userExistsusername) {
                throw new ConflictException("username already exists")
            }

            // hash password before saving 
            const hashedPassword = await bcrypt.hash(userBody.password, 10);

            const newUser = new this.userModel({
                ...userBody,
                password: hashedPassword
            })

            await newUser.save()

            const { password, ...userWithoutPassword } = newUser.toObject();
            return userWithoutPassword;
        } catch (error) {

            if (!(error instanceof ConflictException)) {
                throw new InternalServerErrorException('Failed to register user');
            }
            throw error;
        }
    }

    private isEmail(value: string): boolean {
        // Regex to check if input is an email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(value);
    }

    private generateAccessToken(user: Users) {
        const payload = { ...user }
        return this.jwtService.signAsync(payload, {
            secret: process.env.ACCESS_TOKEN_SECRET,
            expiresIn: "30d",
        })
    }

    async userLogin(loginDetails: LoginDto) {
        try {
            let userExists: Users
            const isEmailorUsername: boolean = this.isEmail(loginDetails.usernameoremail)
            if (isEmailorUsername) {
                userExists = await this.userModel.findOne({ email: loginDetails.usernameoremail })
            } else {
                userExists = await this.userModel.findOne({ username: loginDetails.usernameoremail })
            }

            if (!userExists) {
                throw new NotFoundException("user don't exist")
            }

            if (!userExists.isEmailVerified) {
                throw new ForbiddenException("please verify email to login")
            }

            const passwordVerification = await bcrypt.compare(loginDetails.password, userExists.password)

            if (!passwordVerification) {
                throw new ForbiddenException("Invalid password")
            }
            const token = this.generateAccessToken(userExists)

            return token


        } catch (error) {
            if (!(error instanceof NotFoundException) && !(error instanceof ForbiddenException)) {
                throw new InternalServerErrorException('Failed to login');
            }
            throw error;
        }
    }

    private generateRandomToken(): string {
        return randomBytes(32).toString('hex')
    }
    async sendVerificationMail(email: string) {
        // mimicking sending a mail to this email
        // but im just returning the link
        // save a token to a collection in db along with email 
        const token = this.generateRandomToken()
        const link = `auth/email/verify/${token}`

    }

    async verifyUserWithMail(token: string) {
        // when someone calls that api endpoint , this service will trigger 
        // and update user email verify status
    }


}


