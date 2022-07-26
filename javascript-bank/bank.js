/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((Number.isInteger(balance)) && (balance > 0)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    this.accounts.push(newAccount);
    newAccount.deposit(balance);
    this.nextAccountNumber++;
  } else {
    return null;
  }
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
};
