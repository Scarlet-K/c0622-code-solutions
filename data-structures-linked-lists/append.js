/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const last = new LinkedList(value);
  if (list.next === null) {
    list.next = last;
  }
}
