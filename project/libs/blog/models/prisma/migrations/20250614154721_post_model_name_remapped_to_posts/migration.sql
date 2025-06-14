/*
  Warnings:

  - You are about to drop the `Publication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Publication";

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "type" "PublicationType" NOT NULL,
    "status" "PublicationStatus" NOT NULL DEFAULT 'published',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "author_id" TEXT NOT NULL,
    "video_title" TEXT,
    "video_url" TEXT,
    "text_title" TEXT,
    "announcement" TEXT,
    "content" TEXT,
    "quote_text" TEXT,
    "quote_author" TEXT,
    "photo_url" TEXT,
    "link_url" TEXT,
    "link_description" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
