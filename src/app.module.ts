import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import { RequestLoggerModule } from './request-logger/request-logger.module';
import { RequestLogs, RequestLogSchema } from './request-logger/requestLog.entity';
import { RequestLoggerService } from './request-logger/request-logger.service';
import { RequestLoggerMiddleware } from './common/middlewares/logger-middleware';

dotenv.config();


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL),AuthModule, UserModule,JwtModule, RequestLoggerModule,
    MongooseModule.forFeature([{ name: RequestLogs.name, schema: RequestLogSchema }]),
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService,RequestLoggerService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}

