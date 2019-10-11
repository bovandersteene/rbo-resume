import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { TechnologyDto } from './technology';
import { ROUTES } from '@rbo-resume/api-interfaces';

@UseInterceptors(ClassSerializerInterceptor)
@Controller(ROUTES.TECHNOLOGY)
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {}

  @Get()
  listAll() {
    return this.technologyService.getAll();
  }

  @Post()
  addOne(@Body() technology: TechnologyDto) {
    return this.technologyService.add(technology);
  }
}
