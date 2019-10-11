import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { JobDTO } from './job';

@Controller('job')
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  listAll() {
    return this.jobService.getAll();
  }

  @Post()
  addOne(@Body() jobDTO: JobDTO) {
    return this.jobService.add(jobDTO);
  }
}
