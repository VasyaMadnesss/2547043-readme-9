import {
  Comment,
  Like,
  LinkPost,
  PhotoPost,
  Prisma,
  QuotePost,
  Tag,
  TextPost,
  VideoPost,
} from '@prisma/client';

type FullPost = Prisma.PostGetPayload<{
  include: {
    textPost: true;
    videoPost: true;
    quotePost: true;
    photoPost: true;
    linkPost: true;
    tags: true;
    comments: true;
    likes: true;
    originalPost: true;
    reposts: true;
  };
}>;

type keysToOmit = // Поля, для которых будет возможно значение undefined или null
  | 'comments'
  | 'likes'
  | 'reposts'
  | 'tags'
  | 'textPost'
  | 'videoPost'
  | 'quotePost'
  | 'photoPost'
  | 'linkPost'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'originalPost'
  | 'originalPostId'

export type Post = Omit<FullPost, keysToOmit> & {
  reposts?: Post[] | null;
  comments?: Comment[] | null;
  likes?: Like[] | null;
  tags?: Tag[] | TagWithPosts[] | null;
  textPost?: TextPost | null;
  videoPost?: VideoPost | null;
  quotePost?: QuotePost | null;
  photoPost?: PhotoPost | null;
  linkPost?: LinkPost | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  publishedAt?: Date | null;
  originalPost?: FullPost['originalPost'] | null;
  originalPostId?: FullPost['originalPostId'] | null;
};

export type TagWithPosts = Prisma.TagGetPayload<{
  include: {
    name: true;
    posts: true;
  };
}>;

export type {
  PostType,
  PostStatus,
  LinkPost,
  VideoPost,
  TextPost,
  PhotoPost,
  QuotePost,
  Comment,
  Like,
  Tag,
} from '@prisma/client';
