/* exported getTail */

function getTail(list) {
  let last = list.data;
  while (list.next !== null) {
    list = list.next;
    last = list.data;
  }
  return last;
}
