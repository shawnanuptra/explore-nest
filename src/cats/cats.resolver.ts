import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cat } from './cats.model';
import { CatsService } from './cats.service';
import { NewCatInput } from './cats.input';

@Resolver(() => Cat)
export class CatsResolver {
  // DI to get the service
  constructor(private catService: CatsService) {}

  // Resolve Query with @Query
  @Query(() => [Cat])
  cats() {
    return this.catService.getAll();
  }

  // Resolve Query with @Query
  @Query(() => [Cat])
  getCat(
    @Args('name', { nullable: true }) name?: string,
    @Args('id', { type: () => Int, nullable: true }) id?: number,
  ) {
    if (id !== undefined) {
      // search and return the id
      return this.catService.getById(id);
    }

    if (name !== undefined) {
      // search and return all cats with same name
      console.log(name);
      return this.catService.getByName(name);
    }

    return this.catService.getAll();
  }

  // Mutation with @Mutation
  @Mutation(() => Cat)
  newCat(@Args('input') input: NewCatInput) {
    const { name, breed, owner } = input;
    return this.catService.newCat(name, breed, owner);
  }
}
