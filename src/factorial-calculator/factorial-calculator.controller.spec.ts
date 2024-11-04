import { Test, TestingModule } from '@nestjs/testing';
import { FactorialCalculatorController } from './factorial-calculator.controller';

describe('FactorialCalculatorController', () => {
  let controller: FactorialCalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorialCalculatorController],
    }).compile();

    controller = module.get<FactorialCalculatorController>(FactorialCalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
