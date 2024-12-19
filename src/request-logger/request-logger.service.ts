import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as winston from 'winston';
import { RequestLogs } from './requestLog.entity';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file'; 
@Injectable()
export class RequestLoggerService {
  private winstonLogger: winston.Logger;

  constructor(
    @InjectModel(RequestLogs.name) private requestLogModel: Model<RequestLogs>,
  ) {
    // Initialize the Winston logger inside the constructor
    this.winstonLogger = winston.createLogger({
      level: 'info',
      transports: [
        new winston.transports.Console(),
        new winstonDailyRotateFile({
            filename: 'logs/request-logs-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '30d',
          }),
      ],
    });
  }

  // Log request to MongoDB
  async logRequest(
    method: string,
    endpoint: string,
    statusCode: number,
    responseTime: number,
  ) {
    const log = new this.requestLogModel({
      method,
      endpoint,
      statusCode,
      responseTime,
    });

    await log.save();
  }

  // Log using Winston
  logToWinston(method: string, endpoint: string, statusCode: number) {
    this.winstonLogger.info(`Request: ${method} ${endpoint} - Status: ${statusCode}`);
  }
}
