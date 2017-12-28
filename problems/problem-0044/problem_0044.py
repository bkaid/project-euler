import time
from common.series import *

def project_euler_44():
    right_index = 1
    while True:
        right_index += 1
        right = pentagonal_number(right_index)
        for left_index in range(right_index-1, 0, -1):
            left = pentagonal_number(left_index)
            if is_pentagonal(right-left) and is_pentagonal(right+left):
                return right-left

if __name__ == '__main__':
    print('Project Euler #44')
    print('Find the minimized difference of a the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal.')
    start_time = time.time()
    print('Result: {}'.format(project_euler_44()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
