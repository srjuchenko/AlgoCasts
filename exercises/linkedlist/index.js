// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let count = 0;
    let curr = this.head;

    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return this.clear();

    const lastNode = this.getLast();
    let node = this.head;

    while (node.next != lastNode) {
      node = node.next;
    }
    node.next = null;
  }

  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    const lastNode = this.getLast();
    lastNode.next = node;
  }

  getAt(position) {
    const size = this.size();
    if (position > size || position < 0) return null;
    if (position === size - 1) return this.getLast();
    if (position === 0) return this.head;

    let count = 0;
    let node = this.head;
    while (count < position) {
      node = node.next;
      count++;
    }
    return node;
  }

  removeAt(position) {
    const size = this.size();
    if (position > size - 1 || position < 0) return;
    if (position === size - 1) return this.removeLast();
    if (position === 0) return this.removeFirst();

    let prev = this.head;
    let toRemove = this.getAt(position);
    let next = toRemove.next;

    while (prev.next !== toRemove) {
      prev = prev.next;
    }
    prev.next = next;
  }

  insertAt(data, position) {
    const size = this.size();
    if (position > size - 1) return this.insertLast(data);
    if (position === 0) return this.insertFirst(data);

    const nodeAtPos = this.getAt(position);
    const node = new Node(data, nodeAtPos);
    let curr = this.head;
    while (curr.next !== nodeAtPos) {
      curr = curr.next;
    }
    curr.next = node;
  }

  forEach(callback) {
    const size = this.size();

    for (let i = 0; i < size; i++) {
      let node = this.getAt(i);
      callback(node, i);
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
