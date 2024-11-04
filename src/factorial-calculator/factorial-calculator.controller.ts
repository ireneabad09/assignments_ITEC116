import { Controller, Get, Param } from '@nestjs/common';

@Controller('factorial-calculator')
export class FactorialCalculatorController {

    @Get('factorial/:inputNumber')
    calculateFactorial(@Param('inputNumber') inputNumber: string): { factorial: number } {
        const numberToCalculate = parseInt(inputNumber, 10);
        return { factorial: this.computeFactorial(numberToCalculate) };
    }

    private computeFactorial(number: number): number {
        if (number < 0) return 0; // Factorial is not defined for negative numbers
        if (number === 0 || number === 1) return 1;
        return number * this.computeFactorial(number - 1);
    }
}
