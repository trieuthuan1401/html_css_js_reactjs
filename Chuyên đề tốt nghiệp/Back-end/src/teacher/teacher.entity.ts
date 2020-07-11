import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Teacher {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  image: string;
  @Column()
  position: string;
}
