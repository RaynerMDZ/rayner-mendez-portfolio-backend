import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserService } from '../user/user.service';
import { UpdateEmploymentDto } from '../employment/dto/update-employment.dto';
import { PostService } from "../post/post.service";

@Injectable()
export class PictureService {
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  async createUserPicture(userId: string, image: Express.Multer.File) {
    // const user = await this.userService.getUser(userId);
    // if (!user)
    //   throw new NotFoundException(`User with id: ${userId} not found.`);
    // // @ts-ignore
    // return await this.database.employment.create({ data: createEmploymentDto });

    return '';
  }

  async updateUserPicture(userId: string, pictureId: string, image: Express.Multer.File) {
    return '';
  }


  async getUserPicture(userId: string) {
    return await this.database.user.findUnique({
      where: { id: userId },
      select: { profile_picture: true },
    });
  }

  async getPostPictures(postId: string) {
    return await this.database.post.findUnique({
      where: { id: postId },
      select: { pictures: true },
    });
  }

  async findOne(userId: string, employmentId) {
    const user = await this.userService.getUser(userId);
    if (!user)
      throw new NotFoundException(`User with id: ${userId} not found.`);

    const employment = await this.database.employment.findUnique({ where: { id: employmentId } });
    if (!employment)
      throw new NotFoundException(`Employment with id: ${employmentId} not found.`);

    return employment;
  }

  async update(userId: string, employmentId: string, updateEmploymentDto: UpdateEmploymentDto) {
    const employment = await this.findOne(userId, employmentId);
    if (!employment)
      throw new NotFoundException(`Employment with id: ${employmentId} not found.`);
    // @ts-ignore
    return await this.database.employment.update({
      where: { id: employment.id },
      data: updateEmploymentDto,
    });
  }

  async remove(userId: string, employmentId: string) {
    const employment = await this.findOne(userId, employmentId);
    if (!employment)
      throw new NotFoundException(`Employment with id: ${employmentId} not found.`);

    return await this.database.employment.delete({
      where: { id: employment.id },
    });
  }
}
