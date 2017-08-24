// Back-end

// Constructor for a customer's bank account
function BankAccount(name,balance) {
  this.name = name;
  this.balance = balance;
}

// Prototype

BankAccount.prototype.deposit = function () {
  return 
}
// Front-end
$(document).ready(function() {
  $('#createNewAccount').submit(function (event) {
    event.preventDefault();

    var inputtedName = $('input#customerName').val();
    var inputtedDeposit = parseInt($('input#balance').val());

    var newCustomer = new BankAccount(inputtedName , balance);
    // Test
    console.log(newCustomer);

    $('#currentBalance').text(inputtedDeposit);
    });
});
