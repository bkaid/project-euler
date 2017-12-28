import math
import time
from common.math.prime import *

def project_euler_46():
    odd = 1
    while True:
        odd += 2
        matches_conjecture = False
        for x in range(0, math.ceil(math.sqrt(odd / 2))):
            if is_prime(odd - 2*x**2):
                matches_conjecture = True
                break

        if not matches_conjecture:
            return odd


if __name__ == '__main__':
    print('Project Euler #46')
    print('What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?')
    start_time = time.time()
    print('Result: {}'.format(project_euler_46()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
