/*
  Warnings:

  - You are about to drop the `BillProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Profile_idNumber_key";

-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "reported" BOOLEAN;

-- DropTable
DROP TABLE "BillProducts";
