import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServiceService } from './service.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';

@Module({
  providers: [ServiceService],
})
export class ServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
