import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { UserService } from '../user/user.service';
import { MicrosoftAzureBlobStorageService } from '../microsoft-azure-blob-storage/microsoft-azure-blob-storage.service';

@Module({
  providers: [PictureService, UserService, MicrosoftAzureBlobStorageService],
})
export class PictureModule {}
