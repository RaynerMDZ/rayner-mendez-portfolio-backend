import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PictureService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('Picture Service');
  }

  async createOrUpdateUserPicture(userId: string, pictureId: string, image: Express.Multer.File) {
    return '';
  }
}
