import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const PORT: number = Number(process.env.PORT) || 8080;
  await app.listen(PORT, () => {
    console.log('Application started on port', PORT);
  });
}
bootstrap();
