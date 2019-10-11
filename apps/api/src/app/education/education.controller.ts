import { Body, Controller, Get, Post } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationDto } from './education';

@Controller('education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Get()
  listAll() {
    return this.educationService.getAll();
  }

  @Post()
  addOne(@Body() educationDto: EducationDto) {
    return this.educationService.add(educationDto);
  }}
