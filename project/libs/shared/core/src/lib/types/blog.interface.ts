export enum PostType {
  VIDEO = 'video',
  TEXT = 'text',
  QUOTE = 'quote',
  PHOTO = 'photo',
  LINK = 'link',
}

export enum PostStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
}

export interface BasePost {
  id: string;
  type: PostType;
  status: PostStatus;
  createdAt: string; // ISO format
  publishedAt: string;
  updatedAt: string;
  userId: string;
  isRepost: boolean;
  originalPostId?: string | null;
}

export interface VideoPost {
  id: string;
  title: string;
  videoUrl: string;
}

export interface TextPost {
  id: string;
  title: string;
  announcement: string;
  text: string;
}

export interface QuotePost {
  id: string;
  quote: string;
  author: string;
}

export interface PhotoPost {
  id: string;
  photoUrl: string;
}

export interface LinkPost {
  id: string;
  url: string;
  description?: string;
}

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
  userId: string;
  postId: string;
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
  createdAt: string;
}

// Полный пост с вложенными типами
export interface Post extends BasePost {
  originalPost: Post | null;
  reposts: Post[] | null;

  postDetails: VideoPost | TextPost | QuotePost | PhotoPost | LinkPost;

  tags: string[] | null;
  comments: Comment[] | null;
  likes: Like[] | null;
}

export interface CreateVideoPost {
  type: PostType.VIDEO;
  publishedAt: string;
  userId: string;
  videoPost: {
    title: string;
    videoUrl: string;
  };
  tags?: string[];
}

export interface CreateTextPost {
  type: PostType.TEXT;
  publishedAt: string;
  userId: string;
  textPost: {
    title: string;
    announcement: string;
    text: string;
  };
  tags?: string[];
}

// И так далее для других типов постов
