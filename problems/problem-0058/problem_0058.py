import time
from common.math.prime import is_prime

def project_euler_58():
    level = 3
    primes = 3
    candidates = 5
    i = 9

    while primes / candidates >= .1:
        level += 2
        candidates += 4
        for _ in range(1, 5):
            i += level - 1
            if is_prime(i):
                primes += 1

    return level

if __name__ == '__main__':
    print('Project Euler #58')
    print('What is the side length of the square spiral for which the ratio of primes along both '
          'diagonals first falls below 10%?')
    START_TIME = time.time()
    print('Result: {}'.format(project_euler_58()))
    print('Elapsed time: {} seconds'.format(time.time() - START_TIME))
