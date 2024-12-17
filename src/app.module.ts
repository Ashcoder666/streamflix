import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL),AuthModule],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService],
})
export class AppModule {}