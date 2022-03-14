import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EducationService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('Education Service');
  }

  // async create(userId: string, createEducationDto: CreateEducationDto) {
  //   const user = await this.userService.getUser(userId);
  //   if (!user)
  //     throw new NotFoundException(`User with id: ${userId} not found.`);
  //   // @ts-ignore
  //   return await this.database.education.create({ data: createEducationDto });
  // }
  //
  // async getEducations(userId: string) {
  //   return await this.database.user.findUnique({
  //     where: { id: userId },
  //     select: { educations: true },
  //   });
  // }
  //
  // async findOne(userId: string, educationId: string) {
  //   const user = await this.userService.getUser(userId);
  //   if (!user)
  //     throw new NotFoundException(`User with id: ${userId} not found.`);
  //
  //   const education = await this.database.education.findUnique({
  //     where: { id: educationId },
  //   });
  //   if (!education)
  //     throw new NotFoundException(
  //       `Education with id: ${educationId} not found.`,
  //     );
  //
  //   return education;
  // }
  //
  // async update(
  //   userId: string,
  //   educationId: string,
  //   updateEducationDto: UpdateEducationDto,
  // ) {
  //   const education = await this.findOne(userId, educationId);
  //   if (!education)
  //     throw new NotFoundException(
  //       `Education with id: ${educationId} not found.`,
  //     );
  //   // @ts-ignore
  //   return await this.database.education.update({
  //     where: { id: education.id },
  //     data: updateEducationDto,
  //   });
  // }
  //
  // async remove(userId: string, educationId: string) {
  //   const education = await this.findOne(userId, educationId);
  //   if (!education)
  //     throw new NotFoundException(
  //       `Education with id: ${educationId} not found.`,
  //     );
  //
  //   return await this.database.education.delete({
  //     where: { id: education.id },
  //   });
  // }
}
