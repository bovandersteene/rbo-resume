import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { TechnologyDto } from './technology';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('technology')
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {
  }

  @Get()
  listAll(){
    return this.technologyService.getAll();
  }

  @Post()
  addOne(@Body() technology: TechnologyDto){
    return this.technologyService.add(technology);
  }
}
