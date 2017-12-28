import pytest
import digits

def test_to_digits():
    assert digits.to_digits(1234) == [1,2,3,4]
    assert digits.to_digits(4321) == [4,3,2,1]
    assert digits.to_digits(1) == [1]
    assert digits.to_digits(36028797018963968) == [3,6,0,2,8,7,9,7,0,1,8,9,6,3,9,6,8]

def test_same_digits():
    assert digits.same_digits([1,2,3,4], [4,3,2,1])