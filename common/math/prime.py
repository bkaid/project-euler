import math

def is_prime(number):
    """Determines if a given number is prime

    Ported from prime.js

    Arguments:
        number {[number]} -- The number to check if it is prime
    """
    if number <= 1:
        return False

    sqrt = math.sqrt(number)
    divisor = 2

    # only need to search for prime numbers up to the square root of the value.
    # if a number is not prime, it can be factored into two factors, a * b.
    # if a and b were both greater than the square root of the number, a * b
    # would be greater than the value so at least one of its factors must be less.
    while number % divisor != 0 and divisor <= sqrt:
        # increase by 2 to skip all even numbers
        divisor += 2 if divisor > 2 else 1

    return divisor > sqrt
