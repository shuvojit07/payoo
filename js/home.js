document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();

// step-2
const addMoneyInput = document.getElementById('input-add-money').value;


const pinNumberInput = document.getElementById('input-pin-number').value;

// step 3 verify pin number
// worng way to validate pin number
if(pinNumberInput === '1234'){

    // step-4 ; get the current balance

    const balance = document.getElementById('account-balance').innerText;
    
    // step-5: add money with balance 

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat (balance);
    const newBalance = addMoneyNumber + balanceNumber ;
   

    // step-6 : update the balance in the UI / dom
    document.getElementById('account-balance').innerText = newBalance;

}

else{
    alert('Faild to add money ! Please  try  agin')
}


})