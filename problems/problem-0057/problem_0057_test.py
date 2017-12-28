import pytest
import problem_0057

def test_pell_number():
    assert problem_0057.pell_number(2) == 2
    assert problem_0057.pell_number(7) == 169

def test_sqrt_2_approximation():
    assert problem_0057.sqrt_2_approximation(2) == (3,2)
    assert problem_0057.sqrt_2_approximation(3) == (7,5)
    assert problem_0057.sqrt_2_approximation(9) == (1393,985)