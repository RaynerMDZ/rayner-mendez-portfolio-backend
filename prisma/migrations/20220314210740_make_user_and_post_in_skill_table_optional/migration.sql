-- DropForeignKey
ALTER TABLE `Skill` DROP FOREIGN KEY `Skill_user_id_fkey`;

-- AlterTable
ALTER TABLE `Service` MODIFY `description` VARCHAR(200) NULL;

-- AlterTable
ALTER TABLE `Skill` MODIFY `description` VARCHAR(200) NULL,
    MODIFY `user_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
