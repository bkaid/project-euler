import collections

def to_digits(number):
    return list(map(int, str(number)))

def same_digits(digits1, digits2):
    return collections.Counter(digits1) == collections.Counter(digits2)
