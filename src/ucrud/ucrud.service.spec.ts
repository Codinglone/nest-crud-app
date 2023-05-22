import { Test, TestingModule } from '@nestjs/testing';
import { UcrudService } from './ucrud.service';

describe('UcrudService', () => {
  let service: UcrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UcrudService],
    }).compile();

    service = module.get<UcrudService>(UcrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
