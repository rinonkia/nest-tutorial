import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Author } from 'src/domains/author.domain';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => Author, { nullable: true })
  async author(@Args('id', { type: () => Int }) id: number) {
    const author = await this.authorService.findByIdAndPosts(id);
    return author ? new Author(author) : null;
  }
}
