import { Injectable } from '@nestjs/common';
import { Author } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class AuthorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByIdAndPosts(id: number): Promise<Author | null> {
    return await this.prisma.author.findUnique({
      where: {
        id,
      },
      include: {
        posts: true,
      },
    });
  }

  async findAll(): Promise<Author[]> {
    return await this.prisma.author.findMany();
  }
}
