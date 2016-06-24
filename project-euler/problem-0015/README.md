See [https://projecteuler.net/problem=15]()

Run: `node project-euler/problem-0015`

According to [lattice path documentation](https://en.wikipedia.org/wiki/Lattice_path#Combinations_and_NE_lattice_paths) on Wikipedia, the number of lattice paths for a square from (0,0) to (n,n) is equal to the binomial coefficient:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c68d1aa53f0ebecc1b82a4eaff9a3963c3b35e35)

According to the [binomial coefficient documentation](https://en.wikipedia.org/wiki/Binomial_coefficient#Factorial_formula) on Wikipedia, there is a factorial formula for computing the result: n!/k!(n-k)!