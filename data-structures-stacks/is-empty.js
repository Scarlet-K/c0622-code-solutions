/* exported isEmpty */

// function isEmpty(stack) {
//   if (stack.peek() === undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEmpty(stack) {
  return typeof stack.peek() === 'undefined';
}
