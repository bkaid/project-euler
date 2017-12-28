import time
import math

def combinations(take, count):
    return math.factorial(count) / (math.factorial(take) * math.factorial(count - take))

def project_euler_53():
    return len([(x, y) for x in range(1, 101) for y in range(1, 101) if x <= y and combinations(x, y) > 1000000])

if __name__ == '__main__':
    print('Project Euler #53')
    print('How many combinations under 100 are greater than 1 million?')
    start_time = time.time()
    print('Result: {}'.format(project_euler_53()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
