import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[
        JwtModule,
        UserModule
    ],
    providers:[AuthService]
})
export class AuthModule {}
