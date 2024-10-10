document.getElementById('btn-cas-out').addEventListener('click', function(event){
        // step -1 

        event.preventDefault();
        
        // step 2
        const cashOutInput = document.getElementById('input-cash-out').value;
        const cashOutPinInput = document.getElementById('cash-out-pin-number').value;

        // step 3

        if(cashOutPinInput === '1234'){

                // step-4 ; get the current balance

                    const balance = document.getElementById('account-balance').innerText;

                    // step 5

                    const cashOutAmpunt = parseFloat(cashOutInput);
                    const balanceNumber = parseFloat (balance);

                    const newBalance = balanceNumber - cashOutAmpunt ;
                // upadet UI /DOM

                    document.getElementById('account-balance').innerText = newBalance;
        }

        else{
            alert('Faild to Cash Out  ! Please  try  agin')
        }

})