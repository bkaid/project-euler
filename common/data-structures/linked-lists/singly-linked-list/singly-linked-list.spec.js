'use strict';
const SinglyLinkedList = require('./singly-linked-list');

describe('LinkedList', () => {
  it('should have null head when no items added', () => {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('should have head when items added', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.add('foo');
    expect(linkedList.head).not.toBeNull();
  });
  
  it('should have next pointer set when multiple items added', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.add('foo');
    linkedList.add('bar');
    expect(linkedList.head.next).not.toBeNull();
    expect(linkedList.head.data).toBe('foo');
    expect(linkedList.head.next.data).toBe('bar');
  });
});