import { Module } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  providers: [PostService, PostResolver, PostRepository],
})
export class PostModule {}
