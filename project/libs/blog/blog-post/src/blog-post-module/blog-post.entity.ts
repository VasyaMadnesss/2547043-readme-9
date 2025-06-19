import { Entity, StorableEntity, BlogPostTypes } from '@project/shared-core';

export class BlogPostEntity
  extends Entity
  implements StorableEntity<BlogPostTypes.Post>
{
  type!: BlogPostTypes.PostType;
  status!: BlogPostTypes.PostStatus;
  createdAt!: string;
  publishedAt!: string;
  updatedAt!: string;
  userId!: string;
  isRepost!: boolean;
  originalPostId?: string | null;
  originalPost!: BlogPostTypes.Post | null;
  reposts!: BlogPostTypes.Post[] | null;
  postDetails!:
    | BlogPostTypes.VideoPost
    | BlogPostTypes.TextPost
    | BlogPostTypes.QuotePost
    | BlogPostTypes.PhotoPost
    | BlogPostTypes.LinkPost;
  tags!: string[] | null;
  comments!: BlogPostTypes.Comment[] | null;
  likes!: BlogPostTypes.Like[] | null;

  constructor(post: BlogPostTypes.Post) {
    super();
    this.populate(post);
  }

  public populate(post?: BlogPostTypes.Post): void {
    if (!post) {
      return;
    }
    this.id = post.id ?? '';
    this.type = post.type;
    this.status = post.status;
    this.createdAt = post.createdAt;
    this.publishedAt = post.publishedAt ?? '';
    this.updatedAt = post.updatedAt ?? '';
    this.userId = post.userId;
    this.isRepost = post.isRepost;
    this.originalPostId = post.originalPostId ?? '';
    this.originalPost = post.originalPost ?? null;
    this.reposts = post.reposts ?? null;
    this.postDetails = post.postDetails;
    this.tags = post.tags ?? null;
    this.comments = post.comments;
    this.likes = post.likes;
  }

  public toPOJO(): BlogPostTypes.Post {
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
      postDetails: this.postDetails,
      tags: this.tags,
      comments: this.comments,
      likes: this.likes,
    };
  }
}
