import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('User Service');
  }

  async getUser(id: string) {
    // const user = await this.database.user.findUnique({ where: { id: id } });
    //
    // if (!user) throw new NotFoundException(`User with id: ${id} not found.`);
    //
    // return user;
    return false;
  }

  async getPosts(userId: string, page: number, pageSize: number) {
    // return await this.postService.getPosts(userId, page, pageSize);
    return false;
  }

  async getPost(userId: string, postId: string) {
    // return await this.postService.getPost(userId, postId);
    return false;
  }

  async getSkills(userId: string) {
    // return await this.skillService.getSkills(userId);
    return false;
  }

  async getEducations(userId: string) {
    // return await this.educationService.getEducations(userId);
    return false;
  }

  async getEmployments(userId: string) {
    // return await this.employmentService.getEmployments(userId);
    return false;
  }

  async createUser(dto: CreateUserDto) {
    return false;
  }

  async updateUser(userId: string, dto: UpdateUserDto) {
    return false;
  }

  async updateUserPassword(userId: string, password: string) {
    return false;
  }

  async updateUserEmail(userId: string, email: string) {
    return false;
  }

  async updateUserPicture(
    userId: string,
    pictureId: string,
    image: Express.Multer.File,
  ) {
    // return await this.pictureService.updateUserPicture(
    //   userId,
    //   pictureId,
    //   image,
    // );
    return false;
  }
}
