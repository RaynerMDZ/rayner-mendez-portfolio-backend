import { Module } from '@nestjs/common';
import { MicrosoftAzureBlobStorageService } from './microsoft-azure-blob-storage.service';

@Module({
  providers: [MicrosoftAzureBlobStorageService],
})
export class MicrosoftAzureBlobStorageModule {}
