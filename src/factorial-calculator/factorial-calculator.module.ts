import { Module } from '@nestjs/common';
import { FactorialCalculatorController } from './factorial-calculator.controller';

@Module({
  controllers: [FactorialCalculatorController]
})
export class FactorialCalculatorModule {}
