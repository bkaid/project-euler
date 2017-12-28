import time

def reverse_number(number):
    return int(str(number)[::-1])

def is_palindrome(number):
    return str(number) == str(number)[::-1]

def is_lychrel(n):
    count = 0
    while count <= 50:
        reverse = reverse_number(n)
        n += reverse
        if is_palindrome(n):
            return False
        count += 1
    return True

def project_euler_55():
    return sum(1 for x in range(1, 10001) if is_lychrel(x))

if __name__ == '__main__':
    print('Project Euler #55')
    print('How many Lychrel numbers are there below ten-thousand?')
    start_time = time.time()
    print('Result: {}'.format(project_euler_55()))
    elapsed_time = time.time() - start_time
    print('Elapsed time: {} seconds'.format(elapsed_time))
