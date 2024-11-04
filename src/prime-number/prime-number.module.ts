import { Module } from '@nestjs/common';
import { PrimeNumberController } from './prime-number.controller';

@Module({
  controllers: [PrimeNumberController]
})
export class PrimeNumberModule {}
