import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  breed: string;

  @Field({ nullable: true })
  owner?: string;
}
