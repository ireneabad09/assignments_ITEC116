import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
    @Get(':n') 
    getFibonacci(@Param('n') n: string): { sequence: string } { 
        const num = parseInt(n, 10);
        const sequence = this.calculateFibonacci(num);
        return { sequence: sequence.join(', ') }; 
    }

    private calculateFibonacci(n: number): number[] {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
}
