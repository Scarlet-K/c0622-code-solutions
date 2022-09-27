/* exported addToBack */

function addToBack(queue, value) {
  if (queue.enqueue(value) === undefined) return;
  return queue.enqueue(value);
}
