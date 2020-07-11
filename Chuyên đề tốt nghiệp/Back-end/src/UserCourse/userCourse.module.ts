import {Module} from '@nestjs/common'
import {userCourseService} from './userCourse.service'
import {UserCourseResolver} from './userCourse.resolver'
import {TypeOrmModule} from '@nestjs/typeorm'
import {UserCourse} from './userCourse.entity'
import {User} from '../User/user.entity'
import {Course} from '../Course/course.entity'

@Module({
    imports:[TypeOrmModule.forFeature([UserCourse]),
        TypeOrmModule.forFeature([User]), 
        TypeOrmModule.forFeature([UserCourse]), 
        TypeOrmModule.forFeature([Course])],
    providers:[UserCourseResolver, userCourseService],
})

export class UserCourseModule {}
