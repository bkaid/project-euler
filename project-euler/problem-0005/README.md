See [https://projecteuler.net/problem=5]()

Run: `node project-euler/problem-0005`

Brute forcing this by checking each possible number to see if its evenly divisible by each gets pretty slow as the number of items increases. If you manually solve each result from 2-9 (10 is given in problem), a pattern appears:

```
Input               Primes     Products     Result
-----               ------     --------     ------
2:                  2          2=           2
2,3:                2,3        2*3=         6
2,3,4:              2,3        2^2*3=       12
2,3,4,5:            2,3,5      2^2*3*5=     60
2,3,4,5,6:          2,3,5      2^2*3*5=     60
2,3,4,5,6,7:        2,3,5,7    2^2*3*5*7=   420
2,3,4,5,6,7,8:      2,3,5,7    2^3*3*5*7=   840
2,3,4,5,6,7,8,9:    2,3,5,7    2^3*3^2*5*7= 2520
2,3,4,5,6,7,8,9,10: 2,3,5,7,9  2^3*3^2*5*7= 2520

```

The algorithm I used for this is 3 steps:

1. Get all prime numbers from 1-N ([see problem 3](../problem-0003))
2. Raise each prime to its max power where the result is less than N as you need as many factors of the prime as allowed
3. Return product of all raised primes
