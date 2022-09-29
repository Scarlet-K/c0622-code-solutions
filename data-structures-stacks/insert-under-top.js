/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const top = stack.pop();
    stack.push(value);
    stack.push(top);
  }
}

// function insertUnderTop(stack, value) {
//   const top = stack.pop();
//   if (typeof top === 'undefined') return;
//   stack.push(value);
//   stack.push(top);
// }
