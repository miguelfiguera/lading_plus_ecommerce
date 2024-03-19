-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "body" TEXT NOT NULL,
    "solved" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "solvedBy" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Report_userId_key" ON "Report"("userId");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
