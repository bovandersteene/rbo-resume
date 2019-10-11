import { Injectable } from '@nestjs/common';
import { Summary } from '@rbo-resume/api-interfaces';
import { summary } from '../data/demo';
import { SummaryEntity } from './summary';

@Injectable()
export class SummaryService {
  private summary = summary;

  get(): SummaryEntity {
    return new SummaryEntity({...this.summary, password: 'my password'});
  }

  save(newSummary: Summary): Summary {
    this.summary = newSummary;
    return this.summary;
  }
}
