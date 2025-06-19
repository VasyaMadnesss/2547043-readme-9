import {
  Entity,
  StorableEntity,
  Post,
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
  TagWithPosts,
} from '@project/shared-core';


export class BlogPostEntity extends Entity implements StorableEntity<Post> {
  type!: PostType;
  status!: PostStatus;
  createdAt?: Post['createdAt'];
  publishedAt?: Post['publishedAt'];
  updatedAt?: Post['updatedAt'];
  userId!: Post['userId'];
  isRepost!: Post['isRepost'];
  originalPostId!: Post['originalPostId'];
  originalPost!: Post['originalPost'];
  reposts?: Post['reposts'];
  typeSpecificFeatures!: VideoPost | TextPost | QuotePost | PhotoPost | LinkPost;
  tags?: Tag[] | TagWithPosts[] | null;
  comments?: Comment[] | null;
  likes?: Like[] | null;
  likesCount?: number;

  constructor(post: Post) {
    super();
    this.populate(post);
  }

  public populate(post?: Post): void {
    if (!post) {
      return;
    }
    this.id = post.id;
    this.type = post.type;
    this.status = post.status;
    this.createdAt = post.createdAt;
    this.publishedAt = post.publishedAt;
    this.updatedAt = post.updatedAt;
    this.userId = post.userId;
    this.isRepost = post.isRepost;
    this.originalPostId = post.originalPostId;
    this.originalPost = post.originalPost;
    this.reposts = post.reposts;
    this.typeSpecificFeatures = post[`${post.type}Post`] as VideoPost | TextPost | QuotePost | PhotoPost | LinkPost;
    this.tags = post.tags;
    this.comments = post.comments;
    this.likes = post.likes;
    this.likesCount = post.likes ? post.likes.length : undefined;
  }

  public toPOJO(): Post {
    return {
      id: this.id,
      type: this.type,
      status: this.status,
      createdAt: this.createdAt,
      publishedAt: this.publishedAt,
      updatedAt: this.updatedAt,
      userId: this.userId,
      isRepost: this.isRepost,
      originalPostId: this.originalPostId,
      originalPost: this.originalPost,
      reposts: this.reposts,
      [`${this.type}Post`]: this.typeSpecificFeatures,
      tags: this.tags,
      comments: this.comments,
      likes: this.likes,
    };
  }
}
