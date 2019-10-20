import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< Updated upstream

@Module({
  imports: [],
=======
import { EducationModule } from './education/education.module';
import { JobModule } from './job/job.module';
import { TechnologyModule } from './technology/technology.module';
import { SummaryModule } from './summary/summary.module';
import { SummaryService } from './service/summary/summary.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { EducationEntity } from './education/education';
import { AuthModule } from './auth/auth.module';

const typeOrmConfig: TypeOrmModuleOptions = {
  ...environment.db,
  entities: [
    EducationEntity,
  ],
  synchronize: false,
  logging: ['error'],
  dropSchema: false,
};

@Module({
  imports: [EducationModule, JobModule, TechnologyModule,  SummaryModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
