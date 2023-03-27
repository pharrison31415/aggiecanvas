/*
  Warnings:

  - A unique constraint covering the columns `[ip]` on the table `Waiting` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Waiting_ip_key" ON "Waiting"("ip");
