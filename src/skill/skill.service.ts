import { Injectable, Logger } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { DatabaseService } from '../database/database.service';
import { ReturnSkillDto } from './dto/return-skill.dto';

@Injectable()
export class SkillService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('Skill Service');
  }

  async create(createSkillDto: CreateSkillDto): Promise<ReturnSkillDto> {
    // @ts-ignore
    return await this.database.skill.create({ data: createSkillDto });
  }

  async getSkills(userId: string): Promise<ReturnSkillDto[]> {
    return await this.database.skill.findMany();
  }

  async findOne(id: string): Promise<ReturnSkillDto> {
    return await this.database.skill.findUnique({ where: { id: id } });
  }

  async update(
    id: string,
    updateSkillDto: UpdateSkillDto,
  ): Promise<ReturnSkillDto> {
    return await this.database.skill.update({
      where: { id: id },
      data: updateSkillDto,
    });
  }

  async remove(id: string): Promise<ReturnSkillDto> {
    return await this.database.skill.delete({ where: { id: id } });
  }
}
