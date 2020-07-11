import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class CodeFree {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  date: string;
  @Column()
  image: string;
}
