import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { UserService } from '../user/user.service';
import { MicrosoftAzureBlobStorageService } from '../microsoft-azure-blob-storage/microsoft-azure-blob-storage.service';
import { PostService } from '../post/post.service';

@Module({
  providers: [
    ImageService,
    UserService,
    PostService,
    MicrosoftAzureBlobStorageService,
  ],
})
export class ImageModule {}
