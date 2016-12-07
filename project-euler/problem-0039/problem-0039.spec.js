'use strict';
const problem39 = require('./problem-0039');

describe('integerRightTriangles', () => {
  it('finds given examples', () => {
    expect(problem39.integerRightTriangles(120).filter(p => (p.a + p.b + p.c) === 120).length).toEqual(3);
  });
});
