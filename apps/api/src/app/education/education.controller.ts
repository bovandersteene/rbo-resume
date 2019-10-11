import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationDto } from './education';
import { ROUTES } from '@rbo-resume/api-interfaces';

@UseInterceptors(ClassSerializerInterceptor)
@Controller(ROUTES.EDUCATION)
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
