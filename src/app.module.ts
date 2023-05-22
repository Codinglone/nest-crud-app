import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UcrudModule } from './ucrud/ucrud.module';

@Module({
  imports: [UcrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
