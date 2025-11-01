document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // get from account number
    const accountNumber = document.getElementById("account-number").value ;
    //get pin value
    const pinNumber = document.getElementById('pin-number').value ;
    const Pin = parseInt(pinNumber);
    
     // now browser already checks "required" fields
    if(!accountNumber || !pinNumber) return; // extra safety

    if(accountNumber.length==11){
        if(Pin===1234){
           window.location.href="./home.html";
           console.log('This is my home page')
        }
        else{
            alert('Pin is incorrect');
            console.log('Pin is incorrect');
        }
    }
    else{
        alert('Account number is incorrect');
        console.log("invalid account number");
    }
});
