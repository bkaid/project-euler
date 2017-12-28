import time
from common.math.digits import *

def project_euler_52():
    i = 125870
    while True:
        i += 1
        digits = to_digits(i)
        if all(same_digits(digits, to_digits(i * n)) for n in range(2, 7)):
            return i

if __name__ == '__main__':
    print('Project Euler #52')
    print('What is the smallest positive integer that 2-6x its value contains the same digits?')
    start_time = time.time()
    print('Result: {}'.format(project_euler_52()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
