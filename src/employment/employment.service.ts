import { Injectable, Logger, NotFoundException } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';


@Injectable()
export class EmploymentService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('Employment Service');
  }

  // async create(userId, createEmploymentDto: CreateEmploymentDto) {
  //   const user = await this.userService.getUser(userId);
  //   if (!user)
  //     throw new NotFoundException(`User with id: ${userId} not found.`);
  //   // @ts-ignore
  //   return await this.database.employment.create({ data: createEmploymentDto });
  // }
  //
  // async getEmployments(userId: string) {
  //   return await this.database.user.findUnique({
  //     where: { id: userId },
  //     select: { employments: true },
  //   });
  // }
  //
  // async findOne(userId: string, employmentId) {
  //   const user = await this.userService.getUser(userId);
  //   if (!user)
  //     throw new NotFoundException(`User with id: ${userId} not found.`);
  //
  //   const employment = await this.database.employment.findUnique({
  //     where: { id: employmentId },
  //   });
  //   if (!employment)
  //     throw new NotFoundException(
  //       `Employment with id: ${employmentId} not found.`,
  //     );
  //
  //   return employment;
  // }
  //
  // async update(
  //   userId: string,
  //   employmentId: string,
  //   updateEmploymentDto: UpdateEmploymentDto,
  // ) {
  //   const employment = await this.findOne(userId, employmentId);
  //   if (!employment)
  //     throw new NotFoundException(
  //       `Employment with id: ${employmentId} not found.`,
  //     );
  //   // @ts-ignore
  //   return await this.database.employment.update({
  //     where: { id: employment.id },
  //     data: updateEmploymentDto,
  //   });
  // }
  //
  // async remove(userId: string, employmentId: string) {
  //   const employment = await this.findOne(userId, employmentId);
  //   if (!employment)
  //     throw new NotFoundException(
  //       `Employment with id: ${employmentId} not found.`,
  //     );
  //
  //   return await this.database.employment.delete({
  //     where: { id: employment.id },
  //   });
  // }
}
