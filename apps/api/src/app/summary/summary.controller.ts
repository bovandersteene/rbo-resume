import { Body, Controller, Get, Post } from '@nestjs/common';
import { SummaryDto } from './summary';
import { SummaryService } from './summary.service';

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
