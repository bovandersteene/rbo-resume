import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationRepository } from './education.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ EducationRepository])],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
