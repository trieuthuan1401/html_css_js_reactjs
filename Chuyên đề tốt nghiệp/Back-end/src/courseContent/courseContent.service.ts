import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import * as uuid from 'uuid'
import {CourseContent} from './courseContent.entity'
import {CourseContentInput} from './courseContent.input'
import {MongoRepository} from 'typeorm'
import { Course } from '../Course/course.entity'

@Injectable()
export class CourseContentService{
    constructor( 
        @InjectRepository(CourseContent)
        private readonly courseContentService: MongoRepository<CourseContent>,
        @InjectRepository(Course)
        private readonly courseService: MongoRepository<Course>,
        ){ }
    
    async findAll(): Promise<CourseContent[]>{
        return this.courseContentService.find();
    }
    
    async create(input: CourseContentInput): Promise<CourseContent> {
        const courseContent = new CourseContent()
        courseContent._id = uuid.v4()
        courseContent.name = input.name
        courseContent.description = input.description
        courseContent.contentLink = input.contentLink
        return this.courseContentService.save(courseContent)
      }
    
      async update(id: string, input: CourseContentInput): Promise<boolean> {
        const courseContent = await this.courseContentService.findOne({ _id: id })
        console.log(courseContent)
        courseContent.name = input.name
        courseContent.description = input.description
        courseContent.contentLink = input.contentLink
        // console.log(courseContent)
        return (await this.courseContentService.save(courseContent)) ? true : false
      }
      
      async delete(id: string): Promise<boolean> {
            const courseContent = new CourseContent()
            courseContent._id = id
            return (await this.courseContentService.remove(courseContent)) ? true : false
      }
      
      async deleteAll(): Promise<boolean> {
            return (await this.courseContentService.deleteMany({})) ? true : false
        }
}