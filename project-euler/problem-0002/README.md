See [https://projecteuler.net/problem=2]()

Run: `node project-euler/problem-0002`

Again, several of the HackerRank test case inputs require using [bignumber.js](https://github.com/MikeMcl/bignumber.js/) to get precision with large integers.  One specific test case input was having timeout issues which then required an optimization that requires knowing that only every third fibonacci numbers is even. Efficiency can be improved by summing every 3rd fibonacci number instead of checking the modulus of the large number returned for each fibonacci number:

```
index:     00 01 02 03 04 05 06 07 08 09
fibonacci: 00 01 01 02 03 05 08 13 21 34
even/odd:  E  O  O  E  O  O  E  O  O  E
```