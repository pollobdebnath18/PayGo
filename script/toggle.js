//by default show Add Money section
document.getElementById("addmoney").style.display = "block";
document.getElementById("cashout").style.display = "none";

document
  .getElementById("addmoney-card")
  .addEventListener("click", function (event) {
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("cashout").style.display = "none";
  });
document
  .getElementById("cashout-card")
  .addEventListener("click", function (envet) {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
  });
