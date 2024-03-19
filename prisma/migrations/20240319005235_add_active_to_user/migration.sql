-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "BillProducts" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "BillProducts_pkey" PRIMARY KEY ("id")
);
