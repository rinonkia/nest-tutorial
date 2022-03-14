import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Post } from './post.domain';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];

  constructor(params: any) {
    this.id = params.id;
    this.firstName = params.first_name;
    this.lastName = params.last_name;
    this.posts = params.posts.map((v: any) => {
      return new Post(v);
    });
  }
}
