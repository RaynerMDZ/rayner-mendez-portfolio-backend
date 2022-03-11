/*
  Warnings:

  - You are about to drop the column `resume_link` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `resume_link`,
    ADD COLUMN `resume_url` VARCHAR(500) NULL;
