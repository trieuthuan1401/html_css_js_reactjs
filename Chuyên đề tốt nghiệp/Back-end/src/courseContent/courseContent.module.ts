import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {CourseContent} from './courseContent.entity'
import {CourseContentResolver} from './courseContent.resolver'
import {CourseContentService} from './courseContent.service'
import { Course } from '../Course/course.entity'

@Module({
    imports:[
        TypeOrmModule.forFeature([CourseContent]),
        TypeOrmModule.forFeature([Course])
    ],
    providers:[CourseContentResolver, CourseContentService]
})

export class CourseContentModule {}
