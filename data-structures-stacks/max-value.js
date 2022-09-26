/* exported maxValue */

function maxValue(stack) {
  let largest = stack.pop();
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      const top = stack.pop();
      if (top > largest) {
        largest = top;
      }
    }
    return largest;
  }
}
