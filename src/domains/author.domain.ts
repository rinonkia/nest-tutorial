import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  like: number;
}
