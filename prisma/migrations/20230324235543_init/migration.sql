-- CreateTable
CREATE TABLE "GridSnapshot" (
    "id" SERIAL NOT NULL,
    "lastUpdate" INTEGER NOT NULL,
    "grid" JSON NOT NULL,

    CONSTRAINT "GridSnapshot_pkey" PRIMARY KEY ("id")
);
