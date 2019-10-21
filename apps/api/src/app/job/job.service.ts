import { Injectable } from '@nestjs/common';
import { jobs } from '../data/demo';
import { JobEntity } from './job';
import { Job } from '@rbo-resume/api-interfaces';

@Injectable()
export class JobService {
  getAll(): Job[]{
    return jobs.map(job => new JobEntity(job));
  }

  add(job: Job): Job[]{
    jobs.push(job);
    return jobs;
  }}
