import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EducationService } from './education.service';
import { UserService } from '../user/user.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';

@Module({
  providers: [EducationService],
})
export class EducationModule {

}
