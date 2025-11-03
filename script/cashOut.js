// document.getElementById('cashout-btn').addEventListener('click', function(event){
//     //get amount
//     const cashAmount = document.getElementById('amount-cash').value ;
//     const convertedCashAmount = parseFloat(cashAmount);

//     //get pin
//     const pinCash = document.getElementById('pin-cash').value;
//     const convertedCashPin = parseInt(pinCash);

//     //get agent number
//     const agent = document.getElementById('agent-number').value;

//     //get main balance
//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     // condition check
//     if(agent.length == 11){
//         if(convertedCashAmount && convertedCashPin){
//             if(convertedCashPin == 12345){
//                 const sub = convertedMainBalance - convertedCashAmount;
//                 document.getElementById('main-balance').innerText = sub;
//             }
//             else{
//                 alert('Please enter your correct pin ')
//             }
//         }
//         else{
//             alert("Please Fill this field");
//         }
//     }
//     else{
//         alert('Please enter your correct agent number')
//     }

// })

document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //amount
    const amount = getInputById("amount-cash");
    //pin
    const pin = getInputById("pin-cash");
    //agent
    const agent = document.getElementById("agent-number").value;
    //main balance
    const mainBalance = getInnerTextById("main-balance");

    // select bank
    const selectBank = document.getElementById("allbank").value;
    //condition

    if (amount > mainBalance) {
      alert("Insufficient Amount");
      return;
    }
    if (agent.length == 11) {
      if (pin == 12345) {
        const sub = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance", sub);

        //for transaction section update

        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-red-500", "p-3", "rounded", "mb-3");

        div.innerHTML = `
  <h1 class="text-2xl text-white font-bold">Cashout Money from ${selectBank}</h1>
  <h3 class="text-white">Amount: ${amount}</h3>
  <p class="text-gray-200">Account Number: ${agent}</p>
  <p class="text-gray-200">Transaction ID: TXN-${Math.floor(
    Math.random() * 1000000000
  )}</p>
`;
        container.appendChild(div);
      } else {
        alert("Please enter the correct pin number");
      }
    } else {
      alert("Please enter the correct agent number");
    }
  });
