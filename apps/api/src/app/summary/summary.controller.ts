import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { SummaryDto } from './summary';
import { SummaryService } from './summary.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('summary')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Get()
  getSummary() {
    return this.summaryService.get();
  }

  @Post()
  addOne(@Body() summary: SummaryDto) {
    return this.summaryService.save(summary);
  }
}
