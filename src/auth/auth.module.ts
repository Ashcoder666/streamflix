import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt-strategy';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';

@Module({
    imports:[
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule,
        UserModule,
    ],
    providers:[AuthService,JwtStrategy],
    controllers: [AuthController],
    exports:[AuthService]
})
export class AuthModule {}



