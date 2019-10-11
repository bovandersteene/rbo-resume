import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors, UsePipes } from '@nestjs/common';
import { JobService } from './job.service';
import { JobValidationPipe } from './pipe';
import { Job, ROUTES } from '@rbo-resume/api-interfaces';

@UseInterceptors(ClassSerializerInterceptor)
@Controller(ROUTES.JOB)
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  listAll() {
    return this.jobService.getAll();
  }

  @Post()
  addOne(@Body(new JobValidationPipe()) jobDTO: Job) {
    return this.jobService.add(jobDTO  );
  }
}
