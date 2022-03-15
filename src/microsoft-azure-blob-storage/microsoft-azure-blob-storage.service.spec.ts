import { Test, TestingModule } from '@nestjs/testing';
import { MicrosoftAzureBlobStorageService } from './microsoft-azure-blob-storage.service';

describe('MicrosoftAzureBlobStorageService', () => {
  let service: MicrosoftAzureBlobStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicrosoftAzureBlobStorageService],
    }).compile();

    service = module.get<MicrosoftAzureBlobStorageService>(MicrosoftAzureBlobStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
