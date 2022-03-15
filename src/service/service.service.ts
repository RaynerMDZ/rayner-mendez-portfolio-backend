import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ServiceDto } from './dto/service.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ServiceService {
  private readonly logger: Logger;
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
  ) {
    this.logger = new Logger('Services Service');
  }

  async createOrUpdateUserServices(userId: string, serviceDto: ServiceDto) {
    const user = await this.userService.getUser(userId);
    if (!user)
      throw new ConflictException(`User with id: ${userId} Does not exists.`);

    const { id, slug, name, description, isActive } = serviceDto;

    return await this.database.service.upsert({
      where: { id: id },
      create: {
        slug: slug,
        name: name,
        description: description,
        is_active: true,
        user_id: userId,
      },
      update: {
        slug: slug,
        name: name,
        description: description,
        is_active: isActive,
        user_id: userId,
        modified_date: new Date(),
      },
    });
  }

  async getUserServices(userId: string) {
    return await this.database.user.findUnique({
      where: { id: userId },
      select: {
        services: {
          where: { is_active: true },
        },
      },
    });
  }

  async getUserService(userId: string, serviceId: string) {
    return await this.database.user.findUnique({
      where: { id: userId },
      select: {
        services: {
          where: { id: serviceId },
        },
      },
    });
  }

  async removeService(userId: string, serviceId: string) {
    const user = this.userService.getUser(userId);
    if (!user)
      throw new ConflictException(
        `Skill with id: ${serviceId} Does not exists.`,
      );

    return await this.database.service.delete({
      where: {
        id: serviceId,
      },
    });
  }

  async toggleActiveOrUnactiveService(userId: string, serviceId: string) {
    const service = await this.database.service.findUnique({
      where: { id: serviceId },
    });
    if (service) {
      const isActive = service.is_active;
      return await this.database.skill.update({
        where: { id: serviceId },
        data: {
          is_active: !isActive,
          modified_date: new Date(),
        },
      });
    }
    throw new ConflictException(`Skill with id: ${serviceId} Does not exists.`);
  }
}
