-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `first_name` VARCHAR(200) NOT NULL,
    `middle_name` VARCHAR(200) NULL,
    `last_name` VARCHAR(200) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `summary` TEXT NULL,
    `github` VARCHAR(500) NULL,
    `linkedin` VARCHAR(500) NULL,
    `twitter` VARCHAR(500) NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_phone_number_key`(`phone_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Authentication` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Authentication_id_key`(`id`),
    UNIQUE INDEX `Authentication_email_key`(`email`),
    UNIQUE INDEX `Authentication_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `title` VARCHAR(200) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `github` VARCHAR(200) NULL,
    `url` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Post_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Picture` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `picture_name` VARCHAR(200) NOT NULL,
    `picture_url` VARCHAR(500) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NULL,
    `post_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Picture_id_key`(`id`),
    UNIQUE INDEX `Picture_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `name` VARCHAR(200) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Skill_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(200) NULL,
    `name` VARCHAR(200) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Service_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Authentication` ADD CONSTRAINT `Authentication_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Picture` ADD CONSTRAINT `Picture_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Picture` ADD CONSTRAINT `Picture_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
