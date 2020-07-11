import {Resolver, Mutation, Query, Args} from '@nestjs/graphql'
import {CourseContent} from './courseContent.entity'
import {CourseContentInput} from './courseContent.input'
import {CourseContentService} from './courseContent.service'

@Resolver('CourseContent')
export class CourseContentResolver{
    constructor(
        private readonly courseContentResolver: CourseContentService
    ){}

    @Query(() => [CourseContent])
    async courseContents(){
        return await this.courseContentResolver.findAll()
    }

    @Mutation(() => CourseContent)
    async createCourseContent(@Args('input') input: CourseContentInput){
        return await this.courseContentResolver.create(input)
    }

    @Mutation(() => Boolean)
    async updateCourseContent(@Args('id') id: string, @Args('input') input: CourseContentInput){
        return await this.courseContentResolver.update(id, input)
    }

    @Mutation(() => Boolean)
    async deleteCourseContent(@Args('id') id: string){
        return this.courseContentResolver.delete(id)
    }

    @Mutation(() => Boolean)
    async deleteCourseContents(){
        return await this.courseContentResolver.deleteAll()
    }
}