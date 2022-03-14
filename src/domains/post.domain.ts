import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  votes?: number;

  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.votes = params.votes;
  }
}
