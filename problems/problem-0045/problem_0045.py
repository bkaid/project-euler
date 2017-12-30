import time
from common.series import is_pentagonal, is_hexagonal, triangular_number

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
    START_TIME = time.time()
    print('Result: {}'.format(project_euler_45()))
    print('Elapsed time: {} seconds'.format(time.time() - START_TIME))
