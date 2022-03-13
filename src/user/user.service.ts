import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from '../database/database.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';

@Injectable()
export class UserService {
  constructor(
    private readonly database: DatabaseService,
    private readonly educationService: EducationService,
    private readonly employmentService: EmploymentService,
    private readonly pictureService: PictureService,
    private readonly postService: PostService,
    private readonly serviceService: ServiceService,
    private readonly skillService: SkillService,
  ) {}


  async getUser(id: string) {
    return Promise.resolve(undefined);
  }

  async getPosts(userId: string, page: number, pageSize: number) {
    return Promise.resolve(undefined);
  }

  async getPost(userId: string, postId: string) {
    return Promise.resolve(undefined);
  }

  async getSkills(userId: string) {
    return Promise.resolve(undefined);
  }

  async getEducations(userId: string) {
    return Promise.resolve(undefined);
  }

  async getEmployments(userId: string) {
    return Promise.resolve(undefined);
  }
}
