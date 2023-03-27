-- CreateTable
CREATE TABLE "Waiting" (
    "id" SERIAL NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" VARCHAR(32) NOT NULL,

    CONSTRAINT "Waiting_pkey" PRIMARY KEY ("id")
);
