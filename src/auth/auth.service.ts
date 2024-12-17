import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/user/user.entity';
import { Model } from 'mongoose';

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

      const newUser =  await this.userModel.create(userBody);

       return newUser;
       } catch (error) {
        // throw new InternalServerErrorException("failed to register user")
        if (!(error instanceof ConflictException)) {
            throw new InternalServerErrorException('Failed to register user');
          }
          throw error;
       }
    }
}
