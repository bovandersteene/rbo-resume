import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { JobDTO } from './job';
import { technologies } from '../data/demo';

@Injectable()
export class JobValidationPipe implements PipeTransform<JobDTO> {
  async transform(value: JobDTO) {
    const object = plainToClass(JobDTO, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const findTechnologies = value.technologies.map(tId => technologies.find(({id}) => id === tId));

    if(findTechnologies.some(tech => !tech)) {
      throw new BadRequestException('technologies not available');
    }

    return {...value, technologies: findTechnologies };
  }

}
