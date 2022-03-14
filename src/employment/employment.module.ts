import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';

@Module({
  providers: [EmploymentService],
})
export class EmploymentModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
