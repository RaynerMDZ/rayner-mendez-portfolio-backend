import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ImageDto } from './dto/image.dto';
import { UserService } from '../user/user.service';
import { MicrosoftAzureBlobStorageService } from '../microsoft-azure-blob-storage/microsoft-azure-blob-storage.service';
import { PostService } from '../post/post.service';

@Injectable()
export class ImageService {
  private readonly logger: Logger;

  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
    private readonly postService: PostService,
    private readonly azureBlobService: MicrosoftAzureBlobStorageService,
  ) {
    this.logger = new Logger('Picture Service');
  }

  async createOrUpdateUserImage(
    user_id: string,
    imageDto: ImageDto,
    image: Express.Multer.File,
  ) {
    const user = await this.userService.getUser(user_id);
    if (!user)
      throw new NotFoundException(`User with id: ${user_id} not found.`);

    const { id, pictureName, slug, isActive } = imageDto;
    let { pictureUrl } = imageDto;

    if (id) {
      this.logger.log('Updating user image.');
      if (await this.database.picture.findUnique({ where: { id: id } })) {
        if (image) {
          pictureUrl = await this.azureBlobService.uploadUserImage(
            user.id,
            image,
          );
        }

        return await this.database.picture.update({
          where: { id: id },
          data: {
            slug: slug,
            picture_name: pictureName,
            picture_url: pictureUrl,
            is_active: isActive,
            user_id: user.id,
            modified_date: new Date(),
          },
        });
      }
      this.logger.error(`Picture with id: ${id} does not exist.`);
    }

    this.logger.log('Creating user image.');
    pictureUrl = await this.azureBlobService.uploadUserImage(user.id, image);

    return await this.database.picture.create({
      data: {
        slug: await this.azureBlobService.getFileName(image),
        picture_name: pictureUrl.split('/').pop(),
        picture_url: pictureUrl,
        is_active: true,
        user_id: user.id,
      },
    });
  }

  async createOrUpdateUserPostImage(
    user_id: string,
    post_id: string,
    imageDto: ImageDto,
    image: Express.Multer.File,
  ) {
    const user = await this.userService.getUser(user_id);
    if (!user) {
      this.logger.error(`User with id: ${user_id} not found.`);
      throw new NotFoundException(`User with id: ${user_id} not found.`);
    }

    const post = await this.postService.getUserPost(user.id, post_id);
    if (!post) {
      this.logger.error(`User with id: ${user_id} not found.`);
      throw new NotFoundException(`Post with id: ${post_id} not found.`);
    }

    const { id, pictureName, slug, isActive } = imageDto;
    let { pictureUrl } = imageDto;

    if (id) {
      this.logger.log('Updating user post image.');
      if (await this.database.picture.findUnique({ where: { id: id } })) {
        if (image) {
          pictureUrl = await this.azureBlobService.uploadUserPostImage(
            user.id,
            post.id,
            image,
          );
        }

        return await this.database.picture.update({
          where: { id: id },
          data: {
            slug: slug,
            picture_name: pictureName,
            picture_url: pictureUrl,
            is_active: isActive,
            post_id: post.id,
            modified_date: new Date(),
          },
        });
      }
      this.logger.error(`Picture with id: ${id} does not exist.`);
    }

    this.logger.log('Creating user post image.');
    pictureUrl = await this.azureBlobService.uploadUserPostImage(
      user.id,
      post.id,
      image,
    );

    return await this.database.picture.create({
      data: {
        slug: await this.azureBlobService.getFileName(image),
        picture_name: pictureUrl.split('/').pop(),
        picture_url: pictureUrl,
        is_active: true,
        post_id: post.id,
      },
    });
  }

  async createUserPostImages(
    user_id: string,
    post_id: string,
    images: Array<Express.Multer.File>,
  ) {
    const user = await this.userService.getUser(user_id);
    if (!user) {
      this.logger.error(`User with id: ${user_id} not found.`);
      throw new NotFoundException(`User with id: ${user_id} not found.`);
    }

    const post = await this.postService.getUserPost(user.id, post_id);
    if (!post) {
      this.logger.error(`User with id: ${user_id} not found.`);
      throw new NotFoundException(`Post with id: ${post_id} not found.`);
    }
    this.logger.log('Creating user post image.');

    for await (const image of images) {
      const pictureUrl = await this.azureBlobService.uploadUserPostImage(
        user.id,
        post.id,
        image,
      );
      const pictureName = await this.azureBlobService.getFileName(image);

      await this.database.picture.create({
        data: {
          slug: pictureName,
          picture_name: pictureName,
          picture_url: pictureUrl,
          is_active: true,
          post_id: post.id,
        },
      });
    }
    return await this.database.post.findUnique({
      where: { id: post.id },
      select: {
        pictures: true,
      },
    });
  }

  async getUserPostImages(userId: string, postId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) {
      this.logger.error(`User with id: ${userId} not found.`);
      throw new NotFoundException(`User with id: ${userId} not found.`);
    }

    const post = await this.postService.getUserPost(user.id, postId);
    if (!post) {
      this.logger.error(`User with id: ${postId} not found.`);
      throw new NotFoundException(`Post with id: ${postId} not found.`);
    }

    return await this.database.post.findUnique({
      where: { id: postId },
      select: { pictures: true },
    });
  }

  async removeUserImage(userId: string, pictureId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) {
      this.logger.error(`User with id: ${userId} not found.`);
      throw new NotFoundException(`User with id: ${userId} not found.`);
    }

    return await this.database.picture.delete({
      where: { id: pictureId },
      select: { id: true },
    });
  }

  async removeUserPostImage(userId: string, postId: string, imageId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) {
      this.logger.error(`User with id: ${userId} not found.`);
      throw new NotFoundException(`User with id: ${userId} not found.`);
    }

    const post = await this.postService.getUserPost(user.id, postId);
    if (!post) {
      this.logger.error(`User with id: ${postId} not found.`);
      throw new NotFoundException(`Post with id: ${postId} not found.`);
    }

    return await this.database.picture.delete({
      where: { id: imageId },
      select: { id: true },
    });
  }
}
