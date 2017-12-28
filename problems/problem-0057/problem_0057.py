from common.math.digits import *
from collections import namedtuple
import functools
import time

fraction = namedtuple("fraction", ["numerator", "denominator"])

@functools.lru_cache(maxsize=None)
def pell_number(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return 2 * pell_number(n-1) + pell_number(n - 2)

def sqrt_2_approximation(n):
    return fraction(pell_number(n-1) + pell_number(n), pell_number(n))

def project_euler_57():
    return sum([1 for x in map(sqrt_2_approximation, range(2, 1002)) if len(to_digits(x.numerator)) > len(to_digits(x.denominator))])

if __name__ == '__main__':
    print('Project Euler #57')
    print('In the first one-thousand expansions of sqrt(2), how many fractions contain a numerator with more digits than denominator?')
    start_time = time.time()
    print('Result: {}'.format(project_euler_57()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
