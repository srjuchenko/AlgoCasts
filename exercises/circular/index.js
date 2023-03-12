// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  if (!list.head || !list.head.next) return false;
  let fast = list.head.next.next;
  let slow = list.head;

  while (fast.next && fast.next.next) {
    if (fast.next === slow || fast === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}

module.exports = circular;
