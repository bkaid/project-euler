import math
import time
from common.math.digits import *

def project_euler_56():
    return max([sum(to_digits(x ** y)) for x in range(1, 100) for y in range(1, 100)])

if __name__ == '__main__':
    print('Project Euler #56')
    print('What is the maximum digital sum for a^b, a,b < 100?')
    start_time = time.time()
    print('Result: {}'.format(project_euler_56()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
