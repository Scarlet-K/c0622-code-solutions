/* exported Transaction */

function Transaction(type, amount) {
  if ((type === 'withdrawal' || type === 'deposit') && (amount > 0)) {
    this.type = type;
    this.amount = amount;
  } else {
    return 'Error: wrong type or amount';
  }
}
