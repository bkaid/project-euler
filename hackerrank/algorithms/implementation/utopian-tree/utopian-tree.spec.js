'use strict';
const utopianTree = require('./utopian-tree');

describe('getHeight', () => {
  it('should calculate for no cycles', () => {
    expect(utopianTree.getHeight(0)).toBe(1);
  });

  it('should calculate for odd cycles', () => {
    expect(utopianTree.getHeight(1)).toBe(2);
    expect(utopianTree.getHeight(3)).toBe(6);
  });

  it('should calculate for even cycles', () => {
    expect(utopianTree.getHeight(2)).toBe(3);
    expect(utopianTree.getHeight(4)).toBe(7);
  });
});