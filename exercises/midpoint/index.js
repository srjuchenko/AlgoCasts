// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  if (!list.head) return null;
  let middle = list.head;
  let curr = list.head;

  while (curr.next && curr.next.next) {
    middle = middle.next;
    curr = curr.next.next;
  }
  return middle;
}

module.exports = midpoint;
