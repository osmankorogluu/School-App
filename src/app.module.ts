import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { ParentModule } from './parent/parent.module';
import { TeacherModule } from './teacher/teacher.module';
import { ProjectModule } from './project/project.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    StudentModule,
    ParentModule,
    TeacherModule,
    ProjectModule,
  ],
})
export class AppModule {}
