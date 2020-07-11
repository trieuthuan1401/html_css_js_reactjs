import {Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import {User} from './user.entity'
import {UserInput} from './user.input'
import {UserService} from './user.service'

@Resolver('User')
export class UserResolver{
    constructor(private readonly userResolver: UserService){}

    @Query(() => [User])
    async users(){
        return this.userResolver.findAll();
    }

    @Mutation()
    async createUser(@Args('input') input: UserInput){
        return this.userResolver.createUser(input);
    }

    @Mutation(() => Boolean)
	async updateUser(
		@Args('id') id: string,
		@Args('input') input: UserInput
	) {
		return await this.userResolver.update(id, input)
  }

  @Mutation(() => Boolean)
	async deleteUser(@Args('id') id: string) {
		return await this.userResolver.delete(id)
  }
  
  @Mutation(() => Boolean)
	async deleteUsers() {
		return await this.userResolver.deleteAll()
	}
}