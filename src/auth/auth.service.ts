import { ConflictException, ForbiddenException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/user/user.entity';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()

export class AuthService {
    constructor(
        @InjectModel(Users.name) private userModel:Model<Users>
    ){}
    async createUser(userBody:RegisterDto):Promise<Users>{
       try {
       let userExists:RegisterDto
       userExists = await this.userModel.findOne({email:userBody.email})
       if (userExists){
        throw new ConflictException("user already exists")
       }

       // hash password before saving 
       const hashedPassword = await bcrypt.hash(userBody.password, 10); 

      const newUser = new this.userModel({
        ...userBody,
        password:hashedPassword
      })
      
      await newUser.save()

       return newUser;
       } catch (error) {
        // throw new InternalServerErrorException("failed to register user")
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

    async userLogin(loginDetails:LoginDto){
        try {
            let userExists:Users
            const isEmailorUsername:boolean = this.isEmail(loginDetails.usernameoremail)
            if (isEmailorUsername){
                userExists = await this.userModel.findOne({email:loginDetails.usernameoremail})
            }else{
                userExists = await this.userModel.findOne({username:loginDetails.usernameoremail})
            }

            if(!userExists){
                throw new NotFoundException
            }

            if(!userExists.isEmailVerified){
                throw new ForbiddenException
            }


        } catch (error) {
            
        }
    }
}
