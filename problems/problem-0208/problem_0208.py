import time


def project_euler_208():
    min = int(1020304050607080900 ** .5)
    max = int(1929394959697989990 ** .5)
    for x in range(min, max, 10):
        square = x ** 2
        if (900               <= square % 1000               < 1000
        and 80000             <= square % 100000             < 90000
        and 7000000           <= square % 10000000           < 8000000
        and 600000000         <= square % 1000000000         < 700000000
        and 50000000000       <= square % 100000000000       < 60000000000
        and 4000000000000     <= square % 10000000000000     < 5000000000000
        and 300000000000000   <= square % 1000000000000000   < 400000000000000
        and 20000000000000000 <= square % 100000000000000000 < 30000000000000000):
            print('{} ^ 2 = {}'.format(x, square))
            return square

if __name__ == '__main__':
    print('Project Euler #208')
    print('Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0.')
    START_TIME = time.time()
    print('Result: {}'.format(project_euler_208()))
    print('Elapsed time: {} seconds'.format(time.time() - START_TIME))
