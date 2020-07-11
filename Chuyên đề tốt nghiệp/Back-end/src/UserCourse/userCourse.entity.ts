import {Entity, ObjectIdColumn, Column} from 'typeorm'
import { User } from 'src/User/user.entity';
import { Course } from 'src/Course/course.entity';

@Entity()
export class UserCourse{
    @ObjectIdColumn()
    _id: string
    @Column()
    idUser: string
    @Column()
    users: User
    @Column()
    user: any
    @Column()
    idCourse: string
    @Column()
    couses: Course
    @Column()  
    course: any
}