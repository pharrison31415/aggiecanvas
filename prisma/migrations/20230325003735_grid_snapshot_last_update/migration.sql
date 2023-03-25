/*
  Warnings:

  - The `lastUpdate` column on the `GridSnapshot` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "GridSnapshot" DROP COLUMN "lastUpdate",
ADD COLUMN     "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
