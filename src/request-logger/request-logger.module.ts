import { Module } from '@nestjs/common';
import { RequestLoggerService } from './request-logger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogs, RequestLogSchema } from './requestLog.entity';

@Module({
  imports:[ MongooseModule.forFeature([
    {name:RequestLogs.name,schema:RequestLogSchema}
  ])],
  controllers: [],
  providers: [RequestLoggerService]
})
export class RequestLoggerModule {}
