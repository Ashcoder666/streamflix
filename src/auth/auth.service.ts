import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/user/user.entity';
import { Model } from 'mongoose';

@Injectable()

export class AuthService {
    constructor(
        @InjectModel(Users.name) private userModel:Model<Users>
    ){}
    async createUser(userBody:RegisterDto):Promise<any>{
       try {
       let userExists:RegisterDto
       userExists = await this.userModel.findOne({email:userBody.email})
       if (userExists){
        throw new Error("User already exists please login")
       }

       await this.userModel.create(userBody);

       return "Success"
       } catch (error) {
        throw new InternalServerErrorException("failed to register user")
       }
    }
}
