/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() !== undefined) {
    const next = queue.dequeue();
    queue.enqueue(first);
    return next;
  } else {
    queue.enqueue(first);
    return undefined;
  }
}
