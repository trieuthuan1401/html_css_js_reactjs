import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { Teacher } from '../teacher/teacher.entity';
import { CourseContent } from 'src/courseContent/courseContent.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course]),
              TypeOrmModule.forFeature([Teacher]),
              TypeOrmModule.forFeature([CourseContent])  
  ],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {} 