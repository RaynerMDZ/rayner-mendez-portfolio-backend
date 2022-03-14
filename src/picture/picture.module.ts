import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PictureService } from './picture.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';

@Module({
  providers: [PictureService],
})
export class PictureModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
