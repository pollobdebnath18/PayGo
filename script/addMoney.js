// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (event) {
//     //get amount value
//     const amount = document.getElementById("amount").value;
//     const convertedAmount = parseFloat(amount);

//     //get pin value
//     const pin = document.getElementById("pin").value;
//     const convertedPin = parseInt(pin);

//     //get main balance
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     //get bank account number
//     const bankAccountNumber = document.getElementById(
//       "bank-account-number"
//     ).value;

//     // condition block

//     if (bankAccountNumber.length == 11) {
//       if (convertedAmount && convertedPin) {
//         if (convertedPin == 1234) {
//           const sum = convertedAmount + convertedMainBalance;
//           document.getElementById("main-balance").innerText = sum;
//         }
//         else{
//             alert('Please enter your correct pin ')
//         }
//       } else {
//         alert("Please Fill this field");
//       }
//     } else {
//       alert("Please enter your correct account number");
//     }
//   });



document.getElementById('add-money-btn').addEventListener('click', function(event){
  //get amount 
  const amount = getInputById('amount');
  //get pin 
  const pin = getInputById('pin');
  //main balance 
  const mainBalance = getInnerTextById('main-balance');
  //get  account number 
  const account = document.getElementById('bank-account-number').value;

  // condition
  if(account.length == 11){
    if(pin == 1234){
      const sum = mainBalance + amount ;
      setInnerTextByIdAndValue('main-balance',sum);
    }
    else{
      alert('Please enter correct pin')
    }
  }
  else{
    alert('Please enter correct account number');
  }
})
