import math

def is_pentagonal(number):
    inverse_function_value = (1 + math.sqrt(24*number + 1)) / 6
    return int(inverse_function_value) == inverse_function_value

def is_hexagonal(number):
    inverse_function_value = (1 + math.sqrt(8*number + 1)) / 4
    return int(inverse_function_value) == inverse_function_value

def pentagonal_number(n):
    return n * (3 * n - 1) // 2

def triangular_number(n):
    return n * (n + 1) // 2