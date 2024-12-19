const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = new ListNode();
    this.current = this.queue;
    this.head = this.queue;
    this.element = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(element) {
    if (this.current.value) {
      this.current.next = new ListNode();
      this.current = this.current.next;
    }
    this.current.value = element;

    return this.queue;
  }

  dequeue() {
    this.head = this.queue.next;
    this.element = this.queue.value;
    this.queue = this.head;
    return this.element;
  }
}

module.exports = {
  Queue,
};
