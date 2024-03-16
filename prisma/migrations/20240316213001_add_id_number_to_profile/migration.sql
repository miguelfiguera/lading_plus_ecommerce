/*
  Warnings:

  - A unique constraint covering the columns `[idNumber]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idNumber` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "idNumber" TEXT NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "coordinates" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_idNumber_key" ON "Profile"("idNumber");
