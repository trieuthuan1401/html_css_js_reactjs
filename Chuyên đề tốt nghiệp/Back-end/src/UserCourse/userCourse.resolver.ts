import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import {UserCourse} from './userCourse.entity'
import {userCourseInput} from './userCourse.input'
import { userCourseService } from './userCourse.service'

@Resolver('UserCourse')
export class UserCourseResolver{
    constructor(private readonly userCourseResolver: userCourseService){}

    @Query(() => [UserCourse])
    async userCourses(){
        return this.userCourseResolver.findAll();
    }

    @Mutation(() => UserCourse)
    async createUserCourse(@Args('input') input: userCourseInput){
        return await this.userCourseResolver.create(input);
    }

    @Mutation(() => Boolean)
    async updateUserCourse(@Args('id') id: string, @Args('input') input: userCourseInput){
        return await this.userCourseResolver.update(id, input);
    }

    @Mutation(() => Boolean)
    async deleteUserCourse(@Args('id') id: string){
        return await this.userCourseResolver.delete(id);
    }

    
    @Mutation(() => Boolean)
    async deleteUserCourses(){
        return await this.userCourseResolver.deletes();
    }
}