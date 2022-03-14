/*
  Warnings:

  - You are about to drop the column `user_id` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_user_id_fkey`;

-- DropIndex
DROP INDEX `Post_id_key` ON `Post`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `user_id`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
