import itertools
import functools
import time
from math import factorial

@functools.lru_cache(maxsize=None)
def digit_chain(x):
    while x != 1 and x != 89:
        x = sum([int(digit)**2 for digit in str(x)])
    return x

def project_euler_92(ten_power):
    digits = range(0, 10)
    factorial_value = factorial(ten_power)
    count_89 = 0
    for combination in itertools.combinations_with_replacement(digits, ten_power):
        sum_square = sum(digit**2 for digit in combination)
        if sum_square > 0 and digit_chain(sum_square) == 89:
            count = factorial_value
            for _, group in itertools.groupby(combination):
                count /= factorial(len(list(group)))
            count_89 += int(count)
    return count_89

if __name__ == '__main__':
    print('Project Euler #92')
    print('How many square digits chains for starting numbers below ten million '
          'will arrive at 89?')
    START_TIME = time.time()
    print('Result: {}'.format(project_euler_92(7)))
    print('Elapsed time: {} seconds'.format(time.time() - START_TIME))
