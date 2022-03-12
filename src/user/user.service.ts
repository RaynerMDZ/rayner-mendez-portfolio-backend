import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from '../database/database.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';

@Injectable()
export class UserService {
  constructor(
    private readonly database: DatabaseService,
    private readonly educationService: EducationService,
    private readonly employmentService: EmploymentService,
    private readonly pictureService: PictureService,
    private readonly postService: PostService,
    private readonly serviceService: ServiceService,
    private readonly skillService: SkillService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    try {
      // @ts-ignore
      return await this.database.user.create({ data: createUserDto });
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<ReturnUserDto[]> {
    try {
      // @ts-ignore
      return await this.database.user.findMany();
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<ReturnUserDto> {
    try {
      // @ts-ignore
      return await this.database.user.findUnique({ where: { id: id } });
    } catch (err) {
      console.log(err);
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ReturnUserDto> {
    try {
      // @ts-ignore
      return await this.database.user.update({
        where: { id: id },
        data: updateUserDto,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async remove(id: string): Promise<ReturnUserDto> {
    try {
      // @ts-ignore
      return this.database.user.delete({
        where: { id: id },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
