import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
    imports:[
        UserModule
    ],
    providers:[AuthService]
})
export class AuthModule {}
