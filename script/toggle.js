// //by default show Add Money section
// document.getElementById("addmoney").style.display = "block";
// document.getElementById("cashout").style.display = "none";

// document
//   .getElementById("addmoney-card")
//   .addEventListener("click", function (event) {
//     document.getElementById("addmoney").style.display = "block";
//     document.getElementById("cashout").style.display = "none";
//   });
// document
//   .getElementById("cashout-card")
//   .addEventListener("click", function (envet) {
//     document.getElementById("cashout").style.display = "block";
//     document.getElementById("addmoney").style.display = "none";
//   });

//Default hide
handleToggleDisplay("addmoney", "none");
handleToggleDisplay("cashout", "none");
handleToggleDisplay("transaction", "none");
// Add money card
document
  .getElementById("addmoney-card")
  .addEventListener("click", function (event) {
    handleToggleDisplay("addmoney", "block");
    handleToggleDisplay("cashout", "none");
    handleToggleDisplay("transaction", "none");
  });

//Cash out card
document
  .getElementById("cashout-card")
  .addEventListener("click", function (event) {
    handleToggleDisplay("addmoney", "none");
    handleToggleDisplay("cashout", "block");
    handleToggleDisplay("transaction", "none");
  });

//transaction card
document
  .getElementById("transaction-card")
  .addEventListener("click", function (event) {
    console.log("hello world");
    handleToggleDisplay("transaction", "block");
    handleToggleDisplay("addmoney", "none");
    handleToggleDisplay("cashout", "none");
  });
