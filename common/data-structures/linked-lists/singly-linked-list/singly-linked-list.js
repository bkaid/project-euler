'use strict';

/**
 * Class representing a node in a singly linked list
 */
class Node {

  /**
   * Create a Node
   * @constructor
   * @param {*} data The data to store in the linked list node
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class representing a singly linked list
 */
class LinkedList {

  /**
   * Create a singly linked list
   */
  constructor() {
    this.head = null;
  }

  /**
   * Add a node to the singly linked list
   * @param {*} data
   * @returns {void}
   */
  add(data) {
    var node = new Node(data, null);

    if (this.head) {
      // move to the end of the list and set the next property of the last node
      // to the newly created node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      // if there are no items in the linked list, set this as the head
      this.head = node;
    }
  }
}

module.exports = LinkedList;
