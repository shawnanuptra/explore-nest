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

@InputType()
export class EditCatInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  breed?: string;

  @Field({ nullable: true })
  owner?: string;
}
