/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  if (stack.peek() !== undefined) {
    const top1 = stack.pop();
    if (stack.peek() !== undefined) {
      const top2 = stack.pop();
      stack.push(top2);
      stack.push(top1);
      return top2;
    } else {
      stack.push(top1);
      return undefined;
    }
  }
}

// function get2ndFromTop(stack) {
//   const top = stack.pop();
//   if (typeof top === 'undefined') return;
//   const next = stack.peek();
//   stack.push(top);
//   return next;
// }
