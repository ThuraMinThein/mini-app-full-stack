/*
  Warnings:

  - You are about to drop the `language` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "language";

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "sw" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_key_key" ON "Language"("key");
