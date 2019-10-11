import { Injectable } from '@nestjs/common';
import { Technology } from '../model';
import { technologies } from '../data/demo';

@Injectable()
export class TechnologyService {

  getAll(): Technology[]{
    return technologies;
  }

  add(technology: Technology): Technology[]{
      technologies.push(technology);
      return technologies;
  }

}
