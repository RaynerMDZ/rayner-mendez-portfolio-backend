import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BlobServiceClient } from '@azure/storage-blob';

@Injectable()
export class MicrosoftAzureBlobStorageService {
  private readonly connectionString: string;

  constructor(private readonly config: ConfigService) {
    this.connectionString = config.get('AZURE_STORAGE_CONNECTION_STRING');
    if (!this.connectionString) {
      throw Error('Azure Storage Connection string not found');
    }
  }

  createBlobServiceClient() {
    return BlobServiceClient.fromConnectionString(this.connectionString);
  }

  async createContainerClient() {
    const containerName = 'rayner-mendez-portfolio';
    const containerClient =
      this.createBlobServiceClient().getContainerClient(containerName);
    const createContainerResponse = await containerClient.createIfNotExists();
    console.log(
      'Container was created successfully. requestId: ',
      createContainerResponse.requestId,
    );
    return containerClient;
  }

  async createBlobClient(blobName: string) {
    const containerClient = await this.createContainerClient();
    return containerClient.getBlockBlobClient(blobName);
  }

  async uploadUserImage(userId: string, file: Express.Multer.File): Promise<string> {
    if (!userId)
      throw new NotFoundException(`User with id: ${userId} is empty. Please provide user.id.`);


    const blobName: string = await this.generateUserFileName(userId, file);

    console.log(blobName);

    const blobClient = await this.createBlobClient(blobName);
    const response = await blobClient.upload(file.buffer, file.buffer.length);

    console.log(response._response.status);
    console.log(blobClient.url);
    return blobClient.url;
  }

  async uploadUserPostImage(userId: string, postId: string, file: Express.Multer.File): Promise<string> {
    if (!userId && !postId) {
      throw new NotFoundException(
        `User with id: ${userId} and Post with id: ${postId} are empty. Please provide user.id and post.id.`,
      );
    }

    const blobName: string = await this.generateUserPostFileName(userId, postId, file);
    const blobClient = await this.createBlobClient(blobName);
    const response = await blobClient.upload(file.buffer, file.buffer.length);

    console.log(response._response);
    console.log(blobClient.url);
    return blobClient.url;
  }

  async generateUserFileName(
    userId: string,
    file: Express.Multer.File,
  ): Promise<string> {
    return `userid-${userId}-file-${await this.getFileName(file)}.${await this.getFileExtension(file)}`;
  }

  async generateUserPostFileName(
    userId: string,
    postId: string,
    file: Express.Multer.File,
  ): Promise<string> {
    return `userid-${userId}-postid-${postId}-file-${
      await this.getFileName(file)
    }.${await this.getFileExtension(file)}`;
  }

  async getFileExtension(file: Express.Multer.File) {
    return file.originalname.split('.').pop();
  }

  async getFileName(file: Express.Multer.File) {
    return file.originalname.split('.')[0];
  }
}
