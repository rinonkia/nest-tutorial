import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Post } from 'src/domains/post.domain';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  async upVotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {
    return await this.postService.upVoteById(postId);
  }
}
