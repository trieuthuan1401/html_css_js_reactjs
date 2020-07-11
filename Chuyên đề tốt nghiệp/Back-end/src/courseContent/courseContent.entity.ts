import {Entity, Column, ObjectIdColumn} from 'typeorm'

@Entity()
export class CourseContent{
    @ObjectIdColumn()
    _id: string
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    contentLink: string
}