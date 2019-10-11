import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from './education/education.module';
import { JobModule } from './job/job.module';
import { TechnologyModule } from './technology/technology.module';
import { ModuleModule } from './module/module.module';
import { SummaryModule } from './summary/summary.module';
import { SummaryService } from './service/summary/summary.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
