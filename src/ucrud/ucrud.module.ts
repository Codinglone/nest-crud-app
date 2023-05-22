import { Module } from '@nestjs/common';
import { UcrudService } from './ucrud.service';
import { UcrudController } from './ucrud.controller';

@Module({
  controllers: [UcrudController],
  providers: [UcrudService]
})
export class UcrudModule {}
