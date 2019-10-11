import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from './education/education.module';
import { JobModule } from './job/job.module';
import { TechnologyModule } from './technology/technology.module';
import { SummaryModule } from './summary/summary.module';

@Module({
  imports: [EducationModule, JobModule, TechnologyModule,  SummaryModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
