/*
  Warnings:

  - Made the column `color` on table `Note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Note" ALTER COLUMN "color" SET NOT NULL;
