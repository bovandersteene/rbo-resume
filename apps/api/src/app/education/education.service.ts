import { Injectable } from '@nestjs/common';
import { Education } from '../model';
import { educations } from '../data/demo';
import { EducationEntity } from './education';

@Injectable()
export class EducationService {
  getAll(): Education[]{
    return educations.map(education => new EducationEntity(education));
  }

  add(education: Education): Education[]{
    educations.push(education);
    return educations;
  }}
