import { UserService } from '../user/user.service';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { EmailDto } from '../user/dto/email.dto';
import { PasswordDto } from '../user/dto/password.dto';
import { UserDto } from '../user/dto/user.dto';
import { PostDto } from '../post/dto/post.dto';
import { Injectable } from '@nestjs/common';
import { PictureDto } from "../picture/dto/picture.dto";

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

  async createOrUpdateUser(dto: UserDto) {
    return await this.userService.createOrUpdateUser(dto);
  }

  async updateUserPassword(userId: string, passwordDto: PasswordDto) {
    return await this.userService.updateUserPassword(userId, passwordDto);
  }

  async updateUserEmail(userId: string, email: EmailDto) {
    return await this.userService.updateUserEmail(userId, email);
  }

  async createOrUpdateUserPicture(
    userId: string,
    pictureDto: PictureDto,
    image: Express.Multer.File,
  ) {
    return await this.pictureService.createOrUpdateUserPicture(
      userId,
      pictureDto,
      image,
    );
  }

  async createPost(
    userId: string,
    dto: PostDto,
    images: Array<Express.Multer.File>,
  ) {
    return Promise.resolve(undefined);
  }

  async updatePost(userId: string, postId: string, dto: PostDto) {
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
