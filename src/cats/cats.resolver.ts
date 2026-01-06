import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cat } from './cats.model';
import { CatsService } from './cats.service';
import { NewCatInput } from './cats.input';

@Resolver(() => Cat)
export class CatsResolver {
  // DI to get the service
  constructor(private catService: CatsService) {}

  @Query(() => [Cat])
  // cats(@Args('name', { nullable: true }) name?: string) {
  async cats() {
    return this.catService.getAll();
    // return name ? this.catService.getByName(name) : this.catService.getAll();
  }

  @Query(() => Cat, { nullable: true })
  async cat(@Args('id', { type: () => Int }) id: number) {
    return this.catService.getById(id);
  }

  // Mutation with @Mutation
  @Mutation(() => Cat)
  async newCat(@Args('input') input: NewCatInput) {
    const { name, breed, owner } = input;
    return this.catService.newCat(name, breed, owner);
  }

  @Mutation(() => Cat, { nullable: true })
  async deleteCat(@Args('id', { type: () => Int }) id: number) {
    return this.catService.deleteCat(id);
  }
}
