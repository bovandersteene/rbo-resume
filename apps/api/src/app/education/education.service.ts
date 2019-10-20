import { Injectable } from '@nestjs/common';
import { Education } from '@rbo-resume/api-interfaces';
import { educations } from '../data/demo';
import { EducationRepository } from './education.repository';
import { fromPromise } from 'rxjs/internal-compatibility';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class EducationService {
  constructor(private educationRepository: EducationRepository){}

  getAll(): Promise<Education[]> {
    return  this.educationRepository.find()
  }

  add(education: Education): Observable<Education[]> {
    educations.push(education);
    return fromPromise(this.educationRepository.save(education)).pipe(
      switchMap(_ => this.getAll())
    );
  }
}
