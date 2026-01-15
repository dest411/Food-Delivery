/*
  Warnings:

  - You are about to drop the column `items` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "items",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'new';
