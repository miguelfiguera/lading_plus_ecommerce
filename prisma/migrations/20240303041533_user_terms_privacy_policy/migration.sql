-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "gender" "Gender";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "privacyPolicy" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "termsAndConditions" BOOLEAN NOT NULL DEFAULT false;
