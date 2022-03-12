import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';

@Module({
  providers: [PictureService],
})
export class PictureModule {}
