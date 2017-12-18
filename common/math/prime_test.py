import pytest
import prime

def test_is_prime():
    assert prime.is_prime(2)
    assert prime.is_prime(3)
    assert not prime.is_prime(1)
    assert not prime.is_prime(9)
    assert prime.is_prime(32416190071)