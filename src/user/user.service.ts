import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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
    const user = await this.database.user.findUnique({ where: { id: id } });

    if (!user) throw new NotFoundException(`User with id: ${id} not found.`);

    return user;
  }

  async getPosts(userId: string, page: number, pageSize: number) {
    return await this.postService.getPosts(userId, page, pageSize);
  }

  async getPost(userId: string, postId: string) {
    return await this.postService.getPost(userId, postId);
  }

  async getSkills(userId: string) {
    return await this.skillService.getSkills(userId);
  }

  async getEducations(userId: string) {
    return await this.educationService.getEducations(userId);
  }

  async getEmployments(userId: string) {
    return await this.employmentService.getEmployments(userId);
  }

  async createUser(dto: CreateUserDto) {}

  async updateUser(userId: string, dto: UpdateUserDto) {
    return '';
  }

  async updateUserPassword(userId: string, password: string) {
    return '';
  }

  async updateUserEmail(userId: string, email: string) {
    return '';
  }

  async updateUserPicture(userId: string, pictureId: string, image: Express.Multer.File) {
    return await this.pictureService.updateUserPicture(userId, pictureId, image);
  }
}
