import { Injectable } from '@nestjs/common';
import { Education } from '../model';
import { educations } from '../data/demo';

@Injectable()
export class EducationService {
  getAll(): Education[]{
    return educations;
  }

  add(education: Education): Education[]{
    educations.push(education);
    return educations;
  }}
