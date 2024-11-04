import { Controller, Get, Param } from '@nestjs/common';

@Controller('prime-number')
export class PrimeNumberController {

    //Prime Number
    @Get('prime/:number')
    isPrime(@Param('number') number: string): { isPrime: boolean } {
        const numb = parseInt(number, 10);
        return { isPrime: this.checkPrime(numb) };
    }

    private checkPrime(n: number): boolean {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
}
