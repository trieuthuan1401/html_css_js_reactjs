import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { UserCourse } from "./userCourse.entity";
import { MongoRepository } from "typeorm";
import { userCourseInput } from "./userCourse.input";
import * as uuid from 'uuid';
import {User} from '../User/user.entity'
import {Course} from '../Course/course.entity'

@Injectable()
export class userCourseService{
    constructor(
        @InjectRepository(UserCourse)
        private readonly userCourseRepository: MongoRepository<UserCourse>,
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
        @InjectRepository(Course)
        private readonly courseRepository: MongoRepository<Course>,
    ){ }

    async findAll(): Promise<any>{
        // res chứa dánh sách userCourse
        const res = await this.userCourseRepository.find();
         // userIds chứa danh sách Id của user
        const userIds = [...res.map((item) => item.idUser)];
        // courseIds chứa danh sách Id của courseuser
        const courseIds = [...res.map((item) => item.idCourse)];
        // users chứa danh sách user có liên kết khóa với courseuser
        const users = await this.userRepository.find({
            where:{
                _id:{
                    $in: userIds
                }
            }
        })
        // courses chứa danh sách course có liên kết khóa với courseuser
        const courses = await this.courseRepository.find({
            where:{
                _id:{
                    $in: courseIds
                }
            }
        })

        const arrayUser = {};
        const arrayCourse = {};
        //tạo mảng mới có values là đối tượng và vị trí chứa nó là _id của đối tượng
        users.forEach((item) => {
            if(!arrayUser[item._id])
            {
                arrayUser[item._id] = item;
            }
        })

        courses.forEach(item => {
            if(!arrayCourse[item._id])
            {
                arrayCourse[item._id] = item;
            }
        })

        res.forEach(e =>{
            e.user = arrayUser[e.idUser];
            e.course = arrayCourse[e.idCourse];
        })
        return res;
    }
    
    async create(input: userCourseInput): Promise<UserCourse>{
        const userCourse = new UserCourse();
        userCourse._id = uuid.v4();
        userCourse.idUser = input.idUser;
        userCourse.idCourse = input.idCourse;

        return this.userCourseRepository.save(userCourse);
    }

    async update(id: string, input: userCourseInput): Promise<boolean>{
        const userCourse = await this.userCourseRepository.findOne({_id: id});
        userCourse.idUser = input.idUser;
        userCourse.idCourse = input.idCourse;

        return await this.userCourseRepository.save(userCourse)?true:false;
    }

    async delete(id: string): Promise<boolean>{
        const userCourse = new UserCourse();
        userCourse._id = id;
        return this.userCourseRepository.remove(userCourse) ? true : false;
    }

    async deletes(): Promise<boolean>{
        return await this.userCourseRepository.deleteMany({ }) ? true : false;
    }
}
