// Back-end

// Constructor for a customer's bank account
function BankAccount(name,balance) {
  this.name = name;
  this.balance = balance;
}

// Prototype

// Check if customer has sufficient funds
// BankAccount.prototype.sufficientAmount = function (amount) {
//   const sufficientAmount = amount > 0;
//   if (!sufficientAmount){
//     console.log("Insufficient Amount");
//     return false;
//   }
//   return true;
//   console.log("Sufficient Amount");
// }

// Making a deposit
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
}

// Making a withdrawal
BankAccount.prototype.withdrawal = function (amount) {
  this.balance -= amount;
  return this.balance;
}

// Reset input fields
function resetFields() {
  $('input#customerName').val("");
  $('input#initialDeposit').val("");
  $('input#enterDepositAmount').val("");
  $('input#enterWithdrawAmount').val("");
}

// Front-end
$(document).ready(function() {
  $('#createNewAccount').submit(function (event) {
    event.preventDefault();

    var inputtedName = $('input#customerName').val();
    var inputtedDeposit = parseFloat($('input#initialDeposit').val());

    var newCustomer = new BankAccount(inputtedName, inputtedDeposit);
    // Test
    console.log(newCustomer);
    $('#currentBalance').append('<p>'+ newCustomer.balance + '</p>');


    $("form#depositAmount").submit(function(event) {
      event.preventDefault();

      $('#currentBalance').empty();
      var depositAdded = parseFloat($('input#enterDepositAmount').val());
      console.log(newCustomer.deposit(depositAdded));
      console.log(newCustomer.balance);
      $('#currentBalance').append('<p>'+ newCustomer.balance + '</p>');

      resetFields();
    });

    $("form#withdrawAmount").submit(function(event) {
      event.preventDefault();

      $('#currentBalance').empty();
      var withdrawnAmount = parseFloat($('input#enterWithdrawAmount').val());
      console.log(newCustomer.withdrawal(withdrawnAmount));
      console.log(newCustomer.balance);
      $('#currentBalance').append('<p>'+ newCustomer.balance + '</p>');

      resetFields();
    })
    resetFields();
  });

});
