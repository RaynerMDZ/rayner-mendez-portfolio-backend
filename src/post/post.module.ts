import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
