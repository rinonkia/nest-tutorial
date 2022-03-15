import { Args, Int, Query, Resolver, Subscription } from '@nestjs/graphql';
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

  // mapが利用できなくてエラーが出る
  // @Query(() => [Author])
  // async authors() {
  //   const authors = await this.authorService.findAll();
  //   console.log(typeof authors);
  //   console.log(authors.entries);
  //   return authors.map((author) => new Author(author));
  // }
}
