import { Injectable } from '@nestjs/common';
import { Job } from '../model';
import { jobs } from '../data/demo';

@Injectable()
export class JobService {
  getAll(): Job[]{
    return jobs;
  }

  add(job: Job): Job[]{
    jobs.push(job);
    return jobs;
  }}
