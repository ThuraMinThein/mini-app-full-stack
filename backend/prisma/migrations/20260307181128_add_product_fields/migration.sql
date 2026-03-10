/*
  Warnings:

  - Added the required column `inPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inStock` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "inPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "inStock" INTEGER NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;
