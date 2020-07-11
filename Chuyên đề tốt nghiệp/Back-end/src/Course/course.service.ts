import { Injectable} from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { Course } from "./course.entity";
import { MongoRepository } from "typeorm";
import { CourseInput } from "./course.input";
import * as uuid from 'uuid';
import { Teacher } from "../teacher/teacher.entity";
import { CourseContent } from "../courseContent/courseContent.entity";


@Injectable()
export class CourseService{
    constructor(
        @InjectRepository(Course)  private readonly courseRepository: MongoRepository<Course>,
        @InjectRepository(Teacher) private readonly teacherRepository: MongoRepository<Teacher>,
        @InjectRepository(CourseContent) private readonly courseContentRepository: MongoRepository<CourseContent>,
    ){}

        async findAll(): Promise<any> {
            const res = await this.courseRepository.find()

            const teacherId = [...res.map( e => e.idTeacher)]
            
            const courseContentId = [...res.map( e => e.idContent)]

            const teachers = await this.teacherRepository.find({
                where:{
                    _id: {
                        $in: teacherId
                    }
                }
            })

            const courseContents = await this.courseContentRepository.find({
                where:{
                    _id: {
                        $in: courseContentId
                    }
                }
            })

            const arrayTeacher = {}
            const arrayCourseContent = {}

            teachers.forEach( e => {
                if(!arrayTeacher[e._id]) {
                    arrayTeacher[e._id] = e
                }
            })

            courseContents.forEach( e => {
                if(!arrayCourseContent[e._id]) {
                    arrayCourseContent[e._id] = e
                }
            })

            res.forEach( e => {
                e.teacher = arrayTeacher[e.idTeacher]
                e.courseContent = arrayCourseContent[e.idContent]
            })

            return res
        }

    async createCourse(input: CourseInput): Promise<Course>{
        const course = new Course();
        course._id = uuid.v4();
        course.name = input.name;
        course.description = input.description;
        course.image = input.image;
        course.oldPrice = input.oldPrice;
        course.newPrice = input.newPrice;
        course.idContent = input.idContent;
        course.idTeacher = input.idTeacher;
        return this.courseRepository.save(course);
    }

    //Chú ý kiểu đầu ra trong service, resolver và graphql phải giống nhau.
    //Các hàm thêm sửa xóa lưu sử dụng cú pháp của mongodb
    async update(id: string, input: CourseInput): Promise<boolean> {
		const course = await this.courseRepository.findOne({ _id: id })
        course.name = input.name;
        course.description = input.description;
        course.image = input.image
        course.oldPrice = input.oldPrice;
        course.newPrice = input.newPrice;
        course.idContent = input.idContent;
        course.idTeacher = input.idTeacher;
		return (await this.courseRepository.save(course)) ? true : false
    }

    async delete(id: string): Promise<boolean> {
    const course = new Course()
    course._id = id
    return (await this.courseRepository.remove(course)) ? true : false
}

async deleteAll(): Promise<boolean> {
    return (await this.courseRepository.deleteMany({})) ? true : false
}
}