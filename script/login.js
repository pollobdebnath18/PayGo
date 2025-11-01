document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value ;
    const pinNumber = document.getElementById('pin-number').value ;
    const Pin = parseInt(pinNumber);
    console.log(accountNumber , pinNumber);
    if(accountNumber.length==11){
        if(Pin===1234){
           window.location.href="./home.html";
           console.log('This is my home page')
        }
        else{
            console.log('not okay');
        }
    }
    else{
        console.log("invalid account number");
    }
});
