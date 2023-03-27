/*
  Warnings:

  - You are about to drop the column `userId` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `ip` on the `Waiting` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientIP]` on the table `Update` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clientIP]` on the table `Waiting` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientIP` to the `Update` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientIP` to the `Waiting` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Waiting_ip_key";

-- AlterTable
ALTER TABLE "Update" DROP COLUMN "userId",
ADD COLUMN     "clientIP" VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE "Waiting" DROP COLUMN "ip",
ADD COLUMN     "clientIP" VARCHAR(32) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Update_clientIP_key" ON "Update"("clientIP");

-- CreateIndex
CREATE UNIQUE INDEX "Waiting_clientIP_key" ON "Waiting"("clientIP");
