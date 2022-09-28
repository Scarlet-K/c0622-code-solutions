/* exported updateHead */

function updateHead(list, value) {
  if (list.print() === undefined) return;
  list.data = value;
  return list.data;
}
