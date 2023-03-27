/*
  Warnings:

  - You are about to drop the column `clientIP` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `clientIP` on the `Waiting` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientIp]` on the table `Update` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clientIp]` on the table `Waiting` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientIp` to the `Update` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientIp` to the `Waiting` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Update_clientIP_key";

-- DropIndex
DROP INDEX "Waiting_clientIP_key";

-- AlterTable
ALTER TABLE "Update" DROP COLUMN "clientIP",
ADD COLUMN     "clientIp" VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE "Waiting" DROP COLUMN "clientIP",
ADD COLUMN     "clientIp" VARCHAR(32) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Update_clientIp_key" ON "Update"("clientIp");

-- CreateIndex
CREATE UNIQUE INDEX "Waiting_clientIp_key" ON "Waiting"("clientIp");
