import {Resolver, Query, Mutation, Args} from '@nestjs/graphql'
import { CourseService } from './course.service';
import { Course } from './course.entity';
import { CourseInput } from './course.input';

@Resolver('Course')
export class CourseResolver{
    constructor(private readonly courseResolver: CourseService){}

    @Query(() => String)
    async hello(){
        return await 'hello';
    }

    @Query(() => [Course])
  async courses() {
    return this.courseResolver.findAll();
  }

    @Mutation(() => Course)
    async createCourse(@Args('input') input: CourseInput){
        return await this.courseResolver.createCourse(input);
    }

    @Mutation(() => Boolean)
    async deleteCourse(@Args('id') id: string){
      return await this.courseResolver.delete(id);
    }

    @Mutation(() => Boolean)
    async updateCourse(@Args('id') id: string, @Args('input') input: CourseInput){
      return await this.courseResolver.update(id, input);
    }

    @Mutation(() => Boolean)
    async deletesCourse(){
      return await this.courseResolver.deleteAll();
    }

}
