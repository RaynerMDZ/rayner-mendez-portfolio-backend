import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PictureDto } from './dto/picture.dto';
import { UserService } from '../user/user.service';
import { MicrosoftAzureBlobStorageService } from '../microsoft-azure-blob-storage/microsoft-azure-blob-storage.service';

@Injectable()
export class PictureService {
  private readonly logger: Logger;

  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
    private readonly azureBlobService: MicrosoftAzureBlobStorageService,
  ) {
    this.logger = new Logger('Picture Service');
  }

  async createOrUpdateUserPicture(user_id: string, pictureDto: PictureDto, image: Express.Multer.File) {
    console.log(image.originalname);
    const user = await this.userService.getUser(user_id);
    if (!user)
      throw new NotFoundException(`User with id: ${user_id} not found.`);

    const { id, userId, pictureName, slug, isActive } = pictureDto;
    let { pictureUrl } = pictureDto;

    if (id) {
      if (await this.database.picture.findUnique({ where: { id: id } })) {
        if (image) {
          pictureUrl = await this.azureBlobService.uploadUserImage(
            user.id,
            image,
          );
        }

        return this.database.picture.update({
          where: { id: id },
          data: {
            slug: slug,
            picture_name: pictureName,
            picture_url: pictureUrl,
            is_active: isActive,
            user_id: userId,
          },
        });
      }
    }

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
}
