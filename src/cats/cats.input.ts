import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCatInput {
  @Field()
  name: string;

  @Field()
  breed: string;

  @Field({ nullable: true })
  owner?: string;
}
