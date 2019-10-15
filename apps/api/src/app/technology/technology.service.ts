import { Injectable } from '@nestjs/common';
import { Technology } from '../model';
import { technologies } from '../data/demo';
import { TechnologyEntity } from './technology';

@Injectable()
export class TechnologyService {

  getAll(): Technology[] {
    return technologies.map(technology => new TechnologyEntity(technology));
  }

  add(technology: Technology): Technology[] {
    technologies.push(technology);
    return technologies;
  }

}
