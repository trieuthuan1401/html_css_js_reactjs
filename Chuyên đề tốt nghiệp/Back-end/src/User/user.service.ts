import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { User } from "./user.entity";
import { MongoRepository } from "typeorm";
import { UserInput } from "./user.input";
import * as uuid from 'uuid';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)  private readonly userRepository: MongoRepository<User>,
    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    
    async createUser(input: UserInput){
        const user = new User();
        user._id = uuid.v4();
        user.userName = input.userName;
        user.passWord = input.passWord;
        user.firstName = input.firstName;
        user.lastName = input.lastName;
        user.imageUrl = input.imageUrl;
        user.phone = input.phone;
        user.email = input.email;
        user.gioiTinh = input.gioiTinh;
        user.idRole = input.idRole;
        return await this.userRepository.save(user);
    }

    async update(id: string, input: UserInput): Promise<boolean> {
		const user = await this.userRepository.findOne({ _id: id })
		user.userName = input.userName
        user.passWord = input.passWord
        user.firstName = input.firstName
        user.lastName = input.lastName
        user.imageUrl = input.imageUrl
        user.phone = input.phone
        user.email = input.email;
        user.gioiTinh = input.gioiTinh;
        user.idRole = input.idRole
		return (await this.userRepository.save(user)) ? true : false
}

async delete(id: string): Promise<boolean> {
    const user = new User();
    user._id = id;
    return (await this.userRepository.remove(user)) ? true : false
}

async deleteAll(): Promise<boolean> {
    return (await this.userRepository.deleteMany({})) ? true : false
}
}
