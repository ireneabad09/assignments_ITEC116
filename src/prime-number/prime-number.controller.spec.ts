import { Test, TestingModule } from '@nestjs/testing';
import { PrimeNumberController } from './prime-number.controller';

describe('PrimeNumberController', () => {
  let controller: PrimeNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimeNumberController],
    }).compile();

    controller = module.get<PrimeNumberController>(PrimeNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
