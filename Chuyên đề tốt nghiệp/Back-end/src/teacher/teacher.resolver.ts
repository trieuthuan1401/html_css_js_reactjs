import {Resolver, Query, Mutation, Args} from '@nestjs/graphql'
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.entity';
import { TeacherInput } from './teacher.input';

@Resolver('Teacher')
export class TeacherResolver{
    constructor(private readonly teacherResolver: TeacherService){}

    @Query(() => [Teacher])
  async teachers() {
    return this.teacherResolver.findAll();
  }

    @Mutation(() => Teacher)
    async createTeacher(@Args('input') input: TeacherInput){
        return await this.teacherResolver.createTeacher(input);
    }

    @Mutation(() => Boolean)
    async deleteTeacher(@Args('id') id: string){
      return await this.teacherResolver.delete(id);
    }

    @Mutation(() => Boolean)
    async updateTeacher(@Args('id') id: string, @Args('input') input: TeacherInput){
      return await this.teacherResolver.update(id, input);
    }

    @Mutation(() => Boolean)
    async deletesTeacher(){
      return await this.teacherResolver.deleteAll();
    }

}
