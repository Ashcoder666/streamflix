import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Removes any properties that are not in the DTO
    forbidNonWhitelisted: true, // Throws an error if unknown properties are sent
    transform: true, // Automatically transform payloads to DTO instances
  }));


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
