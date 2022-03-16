import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserService } from '../user/user.service';
import { EducationDto } from './dto/education.dto';

@Injectable()
export class EducationService {
  private readonly logger: Logger;
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
  ) {
    this.logger = new Logger('Education Service');
  }

  async createOrUpdateUserEducation(
    user_id: string,
    educationDto: EducationDto,
  ) {
    const user = await this.userService.getUser(user_id);
    if (!user)
      throw new NotFoundException(`User with id: ${user_id} not found.`);

    const {
      id,
      userId,
      url,
      description,
      degree,
      field,
      institution,
      location,
      slug,
      startDate,
      endDate,
    } = educationDto;

    return await this.database.education.upsert({
      where: { id: id },
      create: {
        user_id: user.id,
        description: description,
        degree: degree,
        url: url,
        field: field,
        institution: institution,
        location: location,
        slug: slug,
        start_date: startDate,
        end_date: endDate,
      },
      update: {
        user_id: userId,
        description: description,
        degree: degree,
        url: url,
        field: field,
        institution: institution,
        location: location,
        slug: slug,
        start_date: startDate,
        end_date: endDate,
        modified_date: new Date(),
      },
    });
  }

  async getUserEducations(userId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) {
      this.logger.error(`User with id: ${userId} not found.`);
      throw new NotFoundException(`User with id: ${userId} not found.`);
    }

    return await this.database.user.findUnique({
      where: { id: userId },
      select: { educations: true },
    });
  }

  async getUserEducation(userId: string, educationId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) {
      this.logger.error(`User with id: ${userId} not found.`);
      throw new NotFoundException(`User with id: ${userId} not found.`);
    }

    const education = await this.database.education.findUnique({
      where: { id: educationId },
    });
    if (!education)
      throw new NotFoundException(
        `Education with id: ${educationId} not found.`,
      );

    return education;
  }

  async removeUserEducation(userId: string, educationId: string) {
    const education = await this.getUserEducation(userId, educationId);
    if (!education)
      throw new NotFoundException(
        `Education with id: ${educationId} not found.`,
      );

    return await this.database.education.delete({
      where: { id: education.id },
      select: { id: true },
    });
  }
}
