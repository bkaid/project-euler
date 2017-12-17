import time
from common.series import *

def project_euler_45():
    i = 285
    while True:
        i += 1
        value = triangular_number(i)
        if is_pentagonal(value) and is_hexagonal(value):
            return value

if __name__ == '__main__':
    print('Project Euler #45')
    print('Find the next triangle number after 285 that is also pentagonal and hexagonal.')
    start_time = time.time()
    print('Result: {}'.format(project_euler_45()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
