import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserService } from '../user/user.service';
import { EmploymentDto } from './dto/employment.dto';

@Injectable()
export class EmploymentService {
  private readonly logger: Logger;
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
  ) {
    this.logger = new Logger('Employment Service');
  }

  async createOrUpdateUserEmployment(userId: string, employmentDto: EmploymentDto) {
    const user = await this.userService.getUser(userId);
    if (!user)
      throw new NotFoundException(`User with id: ${userId} not found.`);

    const { id, user_id, description, endDate, startDate, jobTitle, slug, location, company  } = employmentDto;

    return await this.database.employment.upsert({
      where: { id: id },
      create: {
        user_id: user.id,
        description: description,
        end_date: endDate,
        start_date: startDate,
        job_title: jobTitle,
        slug: slug,
        location: location,
        company: company,
      },
      update: {
        user_id: user_id,
        description: description,
        end_date: endDate,
        start_date: startDate,
        job_title: jobTitle,
        slug: slug,
        location: location,
        company: company,
      },
    });
  }

  async getUserEmployments(userId: string) {
    return await this.database.user.findUnique({
      where: { id: userId },
      select: { employments: true },
    });
  }

  async getUserEmployment(userId: string, employmentId: string) {
    const user = await this.userService.getUser(userId);
    if (!user)
      throw new NotFoundException(`User with id: ${userId} not found.`);

    const employment = await this.database.employment.findUnique({
      where: { id: employmentId },
    });
    if (!employment)
      throw new NotFoundException(
        `Employment with id: ${employmentId} not found.`,
      );

    return employment;
  }

  async removeUserEmployment(userId: string, employmentId: string) {
    const employment = await this.getUserEmployment(userId, employmentId);
    if (!employment)
      throw new NotFoundException(
        `Employment with id: ${employmentId} not found.`,
      );

    return await this.database.employment.delete({
      where: { id: employment.id },
    });
  }
}
