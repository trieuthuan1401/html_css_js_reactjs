import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { CourseContent } from '../courseContent/courseContent.entity';
import { Teacher } from '../teacher/teacher.entity';

@Entity()
export class Course {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  description: string
  @Column()
  image: string;
  @Column()
  oldPrice: string;
  @Column()
  newPrice: string;

  @Column()
  idContent: string
  @Column()
  courseContents: CourseContent
  @Column()
  courseContent: any

  @Column()
  idTeacher: string;
  @Column()
  teachers: Teacher
  @Column()
  teacher: any
}
