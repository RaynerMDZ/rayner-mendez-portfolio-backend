/*
  Warnings:

  - You are about to drop the column `user_id` on the `Authentication` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authentication_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authentication_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Authentication` DROP FOREIGN KEY `Authentication_user_id_fkey`;

-- AlterTable
ALTER TABLE `Authentication` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `authentication_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_authentication_id_key` ON `User`(`authentication_id`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_authentication_id_fkey` FOREIGN KEY (`authentication_id`) REFERENCES `Authentication`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
