import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { JobService } from './job.service';
import { JobDTO } from './job';

@UseInterceptors(ClassSerializerInterceptor)
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
