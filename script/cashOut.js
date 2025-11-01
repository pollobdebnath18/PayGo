document.getElementById('cashout-btn').addEventListener('click', function(event){
    //get amount 
    const cashAmount = document.getElementById('amount-cash').value ;
    const convertedCashAmount = parseFloat(cashAmount);
    
    //get pin
    const pinCash = document.getElementById('pin-cash').value;
    const convertedCashPin = parseInt(pinCash);
    
    //get agent number 
    const agent = document.getElementById('agent-number').value;

    //get main balance 
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    // condition check
    if(agent.length == 11){
        if(convertedCashAmount && convertedCashPin){
            if(convertedCashPin == 12345){
                const sub = convertedMainBalance - convertedCashAmount;
                document.getElementById('main-balance').innerText = sub;
            }
            else{
                alert('Please enter your correct pin ')
            }
        }
        else{
            alert("Please Fill this field");
        }
    }
    else{
        alert('Please enter your correct agent number')
    }

})