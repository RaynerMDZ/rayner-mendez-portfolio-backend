import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SkillService } from './skill.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';

@Module({
  providers: [SkillService],
})
export class SkillModule {

}
