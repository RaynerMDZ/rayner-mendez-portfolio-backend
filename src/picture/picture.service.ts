import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { DatabaseService } from '../database/database.service';
import { ReturnPictuteDto } from './dto/return-pictute.dto';

@Injectable()
export class PictureService {
  constructor(private readonly database: DatabaseService) {}

  async create(createPictureDto: CreatePictureDto): Promise<ReturnPictuteDto> {
    // @ts-ignore
    return await this.database.picture.create({ data: createPictureDto });
  }

  async findAll(): Promise<ReturnPictuteDto[]> {
    return await this.database.picture.findMany();
  }

  async findOne(id: string): Promise<ReturnPictuteDto> {
    return await this.database.picture.findUnique({ where: { id: id } });
  }

  async update(
    id: string,
    updatePictureDto: UpdatePictureDto,
  ): Promise<ReturnPictuteDto> {
    return await this.database.picture.update({
      where: { id: id },
      data: updatePictureDto,
    });
  }

  async remove(id: string): Promise<ReturnPictuteDto> {
    return await this.database.picture.delete({ where: { id: id } });
  }
}
