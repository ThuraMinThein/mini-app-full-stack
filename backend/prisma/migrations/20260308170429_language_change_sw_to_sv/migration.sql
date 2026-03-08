/*
  Warnings:

  - You are about to drop the column `sw` on the `Language` table. All the data in the column will be lost.
  - Added the required column `sv` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Language" DROP COLUMN "sw",
ADD COLUMN     "sv" TEXT NOT NULL;
