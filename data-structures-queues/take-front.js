/* exported takeFront */

function takeFront(queue) {
  if (queue.dequeue === undefined) return;
  return queue.dequeue();
}
