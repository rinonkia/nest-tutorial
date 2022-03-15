import { Args, Int, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Post } from 'src/domains/post.domain';
import { PostService } from './post.service';

const pubSub = new PubSub();
@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  async upVotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {
    const votedPost = await this.postService.upVoteById(postId);
    pubSub.publish('postedA', { hoge: votedPost.votes });
    return votedPost;
  }

  // subscriptionの実装が出来ていない
}
