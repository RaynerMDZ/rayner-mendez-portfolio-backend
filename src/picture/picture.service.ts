import {
  Injectable, Logger,
  NotFoundException
} from "@nestjs/common";
import { DatabaseService } from '../database/database.service';
import { UpdatePictureDto } from './dto/update-picture.dto';

@Injectable()
export class PictureService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('Picture Service');
  }

  async createUserPicture(userId: string, image: Express.Multer.File) {
    // const user = await this.userService.getUser(userId);
    // if (!user)
    //   throw new NotFoundException(`User with id: ${userId} not found.`);
    // // @ts-ignore
    // return await this.database.employment.create({ data: createEmploymentDto });

    return '';
  }

  async updateUserPicture(
    userId: string,
    pictureId: string,
    image: Express.Multer.File,
  ) {
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

  async findOne(userId: string, pictureId) {
    // const user = await this.userService.getUser(userId);
    // if (!user)
    //   throw new NotFoundException(`User with id: ${userId} not found.`);
    //
    // const picture = await this.database.picture.findUnique({
    //   where: { id: pictureId },
    // });
    // if (!picture)
    //   throw new NotFoundException(
    //     `Employment with id: ${pictureId} not found.`,
    //   );
    //
    // return picture;
  }

  async update(userId: string, pictureId: string, dto: UpdatePictureDto) {
    // const picture = await this.findOne(userId, pictureId);
    // if (!picture)
    //   throw new NotFoundException(
    //     `Employment with id: ${pictureId} not found.`,
    //   );
    //
    // return await this.database.picture.update({
    //   where: { id: picture.id },
    //   data: dto,
    // });
  }

  async remove(userId: string, pictureId: string) {
    // const picture = await this.findOne(userId, pictureId);
    // if (!picture)
    //   throw new NotFoundException(
    //     `Employment with id: ${pictureId} not found.`,
    //   );
    //
    // return await this.database.employment.delete({
    //   where: { id: picture.id },
    // });
  }
}
