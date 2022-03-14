import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { UserService } from '../user/user.service';
import { PostService } from "../post/post.service";

@Module({
  providers: [SkillService, UserService, PostService],
})
export class SkillModule {}
