/*
  Warnings:

  - The values [PUBLISHED,DRAFT] on the enum `PostStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [VIDEO,TEXT,QUOTE,PHOTO,LINK] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostStatus_new" AS ENUM ('published', 'draft');
ALTER TABLE "Post" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "status" TYPE "PostStatus_new" USING ("status"::text::"PostStatus_new");
ALTER TYPE "PostStatus" RENAME TO "PostStatus_old";
ALTER TYPE "PostStatus_new" RENAME TO "PostStatus";
DROP TYPE "PostStatus_old";
ALTER TABLE "Post" ALTER COLUMN "status" SET DEFAULT 'published';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('video', 'text', 'quote', 'photo', 'link');
ALTER TABLE "Post" ALTER COLUMN "type" TYPE "PostType_new" USING ("type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "status" SET DEFAULT 'published';
