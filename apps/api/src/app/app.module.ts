import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from './education/education.module';
import { JobModule } from './job/job.module';
import { TechnologyModule } from './technology/technology.module';
import { SummaryModule } from './summary/summary.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { EducationEntity } from './education/education';
import { SummaryEntity } from './summary/summary';
import { TechnologyEntity } from './technology/technology';
import { JobEntity } from './job/job';

const typeOrmConfig: TypeOrmModuleOptions = {
  ...environment.db,
  entities: [
    EducationEntity,
    SummaryEntity,
    TechnologyEntity,
  ],
  synchronize: false,
  logging: ['error'],
  dropSchema: false,
};

@Module({
  imports: [EducationModule, JobModule, TechnologyModule,  SummaryModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
