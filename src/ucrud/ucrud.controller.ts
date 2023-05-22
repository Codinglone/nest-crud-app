import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UcrudService } from './ucrud.service';
import { CreateUcrudDto } from './dto/create-ucrud.dto';
import { UpdateUcrudDto } from './dto/update-ucrud.dto';

@Controller('ucrud')
export class UcrudController {
  constructor(private readonly ucrudService: UcrudService) {}

  @Post()
  create(@Body() createUcrudDto: CreateUcrudDto) {
    return this.ucrudService.create(createUcrudDto);
  }

  @Get()
  findAll() {
    return this.ucrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ucrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUcrudDto: UpdateUcrudDto) {
    return this.ucrudService.update(+id, updateUcrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ucrudService.remove(+id);
  }
}
