import {Resolver, Query, Mutation, Args} from '@nestjs/graphql'
import { CodeFreeService } from './codeFree.service';
import { CodeFree } from './codeFree.entity';
import { CodeFreeInput } from './codeFree.input';

@Resolver('CodeFree')
export class CourseResolver{
    constructor(private readonly codeFreeResolver: CodeFreeService){}

    @Query(() => String)
    async hello(){
        return await 'hello';
    }

    @Query(() => [CodeFree])
  async codeFrees() {
    return this.codeFreeResolver.findAll();
  }

    @Mutation(() => CodeFree)
    async createCodeFree(@Args('input') input: CodeFreeInput){
        return await this.codeFreeResolver.createCodeFree(input);
    }

    @Mutation(() => Boolean)
    async deleteCodeFree(@Args('id') id: string){
      return await this.codeFreeResolver.delete(id);
    }

    @Mutation(() => Boolean)
    async updateCodeFree(@Args('id') id: string, @Args('input') input: CodeFreeInput){
      return await this.codeFreeResolver.update(id, input);
    }

    @Mutation(() => Boolean)
    async deletesCodeFree(){
      return await this.codeFreeResolver.deleteAll();
    }

}
