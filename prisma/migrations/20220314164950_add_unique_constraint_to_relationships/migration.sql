/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Employment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `Picture` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Education_user_id_key` ON `Education`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Employment_user_id_key` ON `Employment`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Picture_post_id_key` ON `Picture`(`post_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Post_user_id_key` ON `Post`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Service_user_id_key` ON `Service`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Skill_user_id_key` ON `Skill`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Skill_post_id_key` ON `Skill`(`post_id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_id_key` ON `User`(`id`);
