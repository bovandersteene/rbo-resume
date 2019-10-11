import { Injectable } from '@nestjs/common';
import { Job } from '../model';
import { jobs } from '../data/demo';
import { JobEntity } from './job';

@Injectable()
export class JobService {
  getAll(): Job[]{
    return jobs.map(job => new JobEntity(job));
  }

  add(job: Job): Job[]{
    jobs.push(job);
    return jobs;
  }}
