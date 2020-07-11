import { Injectable} from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { Teacher } from "./teacher.entity";
import { MongoRepository } from "typeorm";
import { TeacherInput } from "./teacher.input";
import * as uuid from 'uuid';


@Injectable()
export class TeacherService{
    constructor(
        @InjectRepository(Teacher)  private readonly teacherRepository: MongoRepository<Teacher>,
    ){}

        async findAll(): Promise<Teacher[]> {
            return this.teacherRepository.find();
        }

    async createTeacher(input: TeacherInput): Promise<Teacher>{
        const teacher = new Teacher();
        teacher._id = uuid.v4();
        teacher.name = input.name;
        teacher.image = input.image;
        teacher.position = input.position;

        return this.teacherRepository.save(teacher);
    }

    //Chú ý kiểu đầu ra trong service, resolver và graphql phải giống nhau.
    //Các hàm thêm sửa xóa lưu sử dụng cú pháp của mongodb
    async update(id: string, input: TeacherInput): Promise<boolean> {
		const teacher = await this.teacherRepository.findOne({ _id: id })
        teacher.name = input.name;
        teacher.image = input.image
        teacher.position = input.position;
		return (await this.teacherRepository.save(teacher)) ? true : false
    }

    async delete(id: string): Promise<boolean> {
    const teacher = new Teacher()
    teacher._id = id
    return (await this.teacherRepository.remove(teacher)) ? true : false
}

async deleteAll(): Promise<boolean> {
    return (await this.teacherRepository.deleteMany({})) ? true : false
}
}