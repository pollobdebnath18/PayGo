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

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    //get amount
    const amount = getInputById("amount");
    //get pin
    const pin = getInputById("pin");
    //main balance
    const mainBalance = getInnerTextById("main-balance");
    //get  account number
    const account = document.getElementById("bank-account-number").value;

    const selectBank = document.getElementById("allbank").value;

    // condition

    if (amount <= 0) {
      alert("Add Positive value");
      return;
    }
    if (account.length == 11) {
      if (pin == 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIdAndValue("main-balance", sum);
        
        //for transaction section update
        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-gray-700", "p-3", "rounded", "mb-3");

        div.innerHTML = `
  <h1 class="text-2xl text-white font-bold">Added Money from ${selectBank}</h1>
  <h3 class="text-white">Amount: ${amount}</h3>
  <p class="text-gray-200">Account Number: ${account}</p>
  <p class="text-gray-200">Transaction ID: TXN-${Math.floor(
    Math.random() * 1000000000
  )}</p>
`;

        container.appendChild(div);
      } else {
        alert("Please enter correct pin");
      }
    } else {
      alert("Please enter correct account number");
    }
  });
