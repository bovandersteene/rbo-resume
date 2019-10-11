import { Injectable } from '@nestjs/common';
import { Summary } from '../model';
import { summary } from '../data/demo';

@Injectable()
export class SummaryService {
  private summary = summary;

  get(): Summary {
    return this.summary;
  }

  save(newSummary: Summary): Summary {
    this.summary = newSummary;
    return this.summary;
  }
}
