import { Injectable} from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { CodeFree } from "./codeFree.entity";
import { MongoRepository } from "typeorm";
import { CodeFreeInput } from "./codeFree.input";
import * as uuid from 'uuid';


@Injectable()
export class CodeFreeService{
    constructor(
        @InjectRepository(CodeFree)  private readonly codeFreeRepository: MongoRepository<CodeFree>,
    ){}

        async findAll(): Promise<CodeFree[]> {
            return this.codeFreeRepository.find();
        }

    async createCodeFree(input: CodeFreeInput): Promise<CodeFree>{
        const codeFree = new CodeFree();
        codeFree._id = uuid.v4();
        codeFree.name = input.name;
        codeFree.description = input.description;
        codeFree.date = input.date;
        codeFree.image = input.image;
        return this.codeFreeRepository.save(codeFree);
    }

    //Chú ý kiểu đầu ra trong service, resolver và graphql phải giống nhau.
    //Các hàm thêm sửa xóa lưu sử dụng cú pháp của mongodb
    async update(id: string, input: CodeFreeInput): Promise<boolean> {
		const codeFree = await this.codeFreeRepository.findOne({ _id: id })
        codeFree.name = input.name;
        codeFree.description = input.description;
        codeFree.date = input.date
        codeFree.image = input.image
		return (await this.codeFreeRepository.save(codeFree)) ? true : false
    }

    async delete(id: string): Promise<boolean> {
    const codeFree = new CodeFree()
    codeFree._id = id
    return (await this.codeFreeRepository.remove(codeFree)) ? true : false
}

async deleteAll(): Promise<boolean> {
    return (await this.codeFreeRepository.deleteMany({})) ? true : false
}
}