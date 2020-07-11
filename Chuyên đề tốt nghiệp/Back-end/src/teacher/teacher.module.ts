import { Module } from '@nestjs/common';
import { TeacherResolver } from './teacher.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Module({
    imports: [TypeOrmModule.forFeature([Teacher])],
    providers: [TeacherResolver, TeacherService],
})
export class TeacherModule {} 