/*Створіть клас BankAccount, який буде представляти банківський рахунок. 
Додайте властивість балансу та методи для внесення та зняття грошей.*/
class BankAccount {
  #balance = 0;
  getBalance() {
    return this.#balance;
  }
  deposit(sum, reason) {
    this.#balance += sum;
    console.log(reason);
  }
  withdraw(sum, reason) {
    if (this.#balance < sum) {
      console.log("бракує коштів");
    } else {
      this.#balance -= sum;
      console.log(reason);
    }
  }
}
const account1 = new BankAccount();
console.log(account1.getBalance());
account1.deposit(25000,'salary');
console.log(account1.getBalance());
account1.withdraw(200,'took some coffee ');
console.log(account1.getBalance());
