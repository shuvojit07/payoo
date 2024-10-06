// button id

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    

    // step-3
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value ;
    console.log(phoneNumber , pinNumber)
        // it not right 
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/home.html';
    }
else{
    alert('Worng phone number or pin')
}

})


