import { PartialType } from '@nestjs/mapped-types';
import { CreateUcrudDto } from './create-ucrud.dto';

export class UpdateUcrudDto extends PartialType(CreateUcrudDto) {}
