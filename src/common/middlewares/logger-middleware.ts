import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { performance } from 'perf_hooks';
import { RequestLoggerService } from 'src/request-logger/request-logger.service';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly requestLoggerService: RequestLoggerService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();

    res.on('finish', async () => {
      const responseTime = performance.now() - start;

      // Log to MongoDB and Winston
      await this.requestLoggerService.logRequest(
        req.method,
        req.originalUrl,
        res.statusCode,
        responseTime,
      );

      this.requestLoggerService.logToWinston(
        req.method,
        req.originalUrl,
        res.statusCode,
      );
    });

    next();
  }
}
