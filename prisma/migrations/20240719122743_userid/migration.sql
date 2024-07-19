/*
  Warnings:

  - You are about to drop the column `created_by_id` on the `cars` table. All the data in the column will be lost.
  - Added the required column `userId` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_created_by_id_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "created_by_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
