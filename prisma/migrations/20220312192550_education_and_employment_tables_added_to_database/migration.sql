-- AlterTable
ALTER TABLE `Skill` ADD COLUMN `post_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Education` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `institution` VARCHAR(200) NOT NULL,
    `field` VARCHAR(200) NULL,
    `degree` VARCHAR(200) NULL,
    `location` VARCHAR(200) NULL,
    `description` VARCHAR(1000) NOT NULL,
    `url` VARCHAR(191) NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Education_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employment` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `company` VARCHAR(200) NOT NULL,
    `job_title` VARCHAR(200) NOT NULL,
    `location` VARCHAR(200) NULL,
    `description` VARCHAR(500) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Employment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Education` ADD CONSTRAINT `Education_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employment` ADD CONSTRAINT `Employment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
