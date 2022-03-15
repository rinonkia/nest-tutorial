import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async upVotePost(postId: number): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new NotFoundException(`${postId}は存在しません`);
    }

    return this.prisma.post.update({
      where: { id: postId },
      data: {
        votes: post.votes + 1,
      },
    });
  }

  async findAllByAuthorId(authorId: number): Promise<Post[]> {
    return await this.prisma.post.findMany({
      where: { id: authorId },
    });
  }
}
