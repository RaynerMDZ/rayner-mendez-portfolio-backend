import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BlobServiceClient } from '@azure/storage-blob';
import { randomUUID } from "crypto";

@Injectable()
export class MicrosoftAzureBlobStorageService {
  private readonly connectionString: string;
  constructor(private readonly config: ConfigService) {
    this.connectionString = config.get('AZURE_STORAGE_CONNECTION_STRING');
    if (!this.connectionString) {
      throw Error('Azure Storage Connection string not found');
    }
  }

  containerClient() {
    return BlobServiceClient.fromConnectionString(this.connectionString);
  }

  async createContainer() {
    const containerName = 'rayner-mendez-portfolio';
    const containerClient = this.containerClient().getContainerClient(containerName);
    const createContainerResponse = await containerClient.create();
    console.log('Container was created successfully. requestId: ', createContainerResponse.requestId);
  }

  async createFile(userId: string, postId: string, file: Express.Multer.File) {
    let blobName;
    if (userId && postId) {
      blobName = this.generateUserPostFileName(userId, postId, file);
    } else if (userId && !postId) {
      blobName = this.generateUserFileName(userId, file);
    }
    console.log(blobName);
  }

  async generateUserFileName(userId: string, file: Express.Multer.File) {
    return `userid-${userId}-file-${file.filename}`;
  }

  async generateUserPostFileName(userId: string, postId: string, file: Express.Multer.File) {
    return `userid-${userId}-postid-${postId}-file-${file.filename}`;
  }
}
