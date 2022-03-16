import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { SkillService } from '../skill/skill.service';
import { ServiceService } from '../service/service.service';
import { PostService } from '../post/post.service';
import { ImageService } from '../image/image.service';
import { EmploymentService } from '../employment/employment.service';
import { EducationService } from '../education/education.service';

@Controller('v1/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly skillService: SkillService,
    private readonly serviceService: ServiceService,
    private readonly postService: PostService,
    private readonly imageService: ImageService,
    private readonly employmentService: EmploymentService,
    private readonly educationService: EducationService,
  ) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.getUser(id);
  }

  @Get(':user_id/posts')
  async getPosts(@Param('user_id') userId: string, @Query('page') page: number, @Query('pageSize') pageSize: number) {
    return await this.postService.getUserPosts(userId, page, pageSize);
  }

  @Get(':user_id/posts/:post_id')
  async getPost(@Param('user_id') userId: string, @Param('post_id') postId: string) {
    return await this.postService.getUserPost(userId, postId);
  }

  @Get(':user_id/skills')
  async getSkills(@Param('user_id') userId: string) {
    return await this.skillService.getUserSkills(userId);
  }

  @Get(':user_id/educations')
  async getEducations(@Param('user_id') userId: string) {
    return await this.educationService.getUserEducations(userId);
  }

  @Get(':user_id/employments')
  async getEmployments(@Param('user_id') userId: string) {
    return await this.employmentService.getUserEmployments(userId);
  }
}
