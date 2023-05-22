import { Injectable } from '@nestjs/common';
import { CreateUcrudDto } from './dto/create-ucrud.dto';
import { UpdateUcrudDto } from './dto/update-ucrud.dto';

@Injectable()
export class UcrudService {
  create(createUcrudDto: CreateUcrudDto) {
    return 'This action adds a new ucrud';
  }

  findAll() {
    return `This action returns all ucrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ucrud`;
  }

  update(id: number, updateUcrudDto: UpdateUcrudDto) {
    return `This action updates a #${id} ucrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} ucrud`;
  }
}
