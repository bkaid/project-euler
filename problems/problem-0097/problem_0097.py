import time
import math

def project_euler_97():
    return (28433 * pow(2, 7830457) + 1) % 10**10

if __name__ == '__main__':
    print('Project Euler #97')
    print('Find the last ten digits of 28433×2^7830457 + 1.')
    START_TIME = time.time()
    print('Result: {}'.format(project_euler_97()))
    print('Elapsed time: {} seconds'.format(time.time() - START_TIME))
