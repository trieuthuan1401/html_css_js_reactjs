import { Module } from '@nestjs/common';
import { CourseResolver } from './codeFree.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeFree } from './codeFree.entity';
import { CodeFreeService } from './codeFree.service';

@Module({
    imports: [TypeOrmModule.forFeature([CodeFree])],
  providers: [CourseResolver, CodeFreeService],
})
export class CodeFreeModule {} 