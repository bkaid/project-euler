import pytest
import series

def test_is_pentagonal():
    assert series.is_pentagonal(92)
    assert not series.is_pentagonal(93)

def test_is_hexagonal():
    assert series.is_hexagonal(40755)
    assert not series.is_hexagonal(40756)

def test_pentagonal_number():
    assert series.pentagonal_number(1) == 1
    assert series.pentagonal_number(2) == 5

def test_triangular_number():
    assert series.triangular_number(1) == 1
    assert series.triangular_number(2) == 3