import { Test, TestingModule } from '@nestjs/testing';
import { UcrudController } from './ucrud.controller';
import { UcrudService } from './ucrud.service';

describe('UcrudController', () => {
  let controller: UcrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UcrudController],
      providers: [UcrudService],
    }).compile();

    controller = module.get<UcrudController>(UcrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
