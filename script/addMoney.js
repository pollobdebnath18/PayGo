document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    //get amount value
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);

    //get pin value
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    //get main balance
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    //get bank account number
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;

    // condition block
    if (bankAccountNumber.length == 11) {
      if (convertedPin == 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Your Pin is incorrect");
      }
    } else {
      alert("Bank Account Number is incorrect");
    }
  });
