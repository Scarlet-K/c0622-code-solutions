/* exported updateHead */

function updateHead(list, value) {
  if (list.next === null) return;
  list.data = value;
}
