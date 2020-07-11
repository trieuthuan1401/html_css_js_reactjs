import { Entity, Column, ObjectIdColumn } from 'typeorm';


@Entity()
export class User{
  @ObjectIdColumn()
  _id: string;
  @Column()
  userName: string;
  @Column()
  passWord: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  imageUrl: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  gioiTinh: string;
  @Column()
  idRole: string;
}