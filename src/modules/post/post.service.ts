import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async upVoteById(postId: number) {
    return this.postRepository.upVotePost(postId);
  }

  async findAllByAuthorId(authorId: number) {
    return await this.postRepository.findAllByAuthorId(authorId);
  }
}
