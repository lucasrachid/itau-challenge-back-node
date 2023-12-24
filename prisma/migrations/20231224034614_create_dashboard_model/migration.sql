-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "participation" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);
