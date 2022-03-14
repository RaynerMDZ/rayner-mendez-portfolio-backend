import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { CreatePostDto } from '../post/dto/create-post.dto';
import { UpdatePostDto } from '../post/dto/update-post.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly userService: UserService,
    private readonly educationService: EducationService,
    private readonly employmentService: EmploymentService,
    private readonly pictureService: PictureService,
    private readonly postService: PostService,
    private readonly serviceService: ServiceService,
    private readonly skillService: SkillService,
  ) {}

  async createUser(dto: CreateUserDto) {
    return await this.userService.createUser(dto);
  }

  async updateUser(userId: string, dto: UpdateUserDto) {
    return await this.userService.updateUser(userId, dto);
  }

  async updateUserPassword(userId: string, password: string) {
    return await this.userService.updateUserPassword(userId, password);
  }

  async updateUserEmail(userId: string, email: string) {
    return await this.userService.updateUserEmail(userId, email);
  }

  async updateUserPicture(
    userId: string,
    pictureId: string,
    image: Express.Multer.File,
  ) {
    return await this.userService.updateUserPicture(userId, pictureId, image);
  }

  async createPost(
    userId: string,
    dto: CreatePostDto,
    images: Array<Express.Multer.File>,
  ) {
    return Promise.resolve(undefined);
  }

  async updatePost(userId: string, postId: string, dto: UpdatePostDto) {
    return Promise.resolve(undefined);
  }

  async addPostPictures(
    userId: string,
    postId: string,
    images: Array<Express.Multer.File>,
  ) {
    return Promise.resolve(undefined);
  }

  async updatePostPicture(
    userId: string,
    postId: string,
    pictureId: string,
    image: Express.Multer.File,
  ) {
    // const user = await this.userService.getUser(userId);
    // if (!user) throw new NotFoundException('User not found!');
    //
    // const post = await this.postService.getPost(user.id, postId);
    // if (!post) throw new NotFoundException('Post not found!');

    // const picture = await this.pictureService.update(pictureId);
    // if (!picture) throw new NotFoundException('Picture not found!');

    return Promise.resolve(undefined);
  }
}
