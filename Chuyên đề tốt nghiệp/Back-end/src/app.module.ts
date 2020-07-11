import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CourseModule } from './Course/course.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './User/user.module';
import { UserCourseModule } from './UserCourse/userCourse.module';
import { CourseContentModule } from './courseContent/courseContent.module';
import { CodeFreeModule } from './codeFree/codeFree.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://nhatthienntu:01692451740concacnE1@cluster0-gtfif.mongodb.net/APP_HOC_TRUC_TUYEN?retryWrites=true&w=majority',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    CourseModule,
    UserModule,
    UserCourseModule,
    CourseContentModule,
    CodeFreeModule,
    TeacherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}