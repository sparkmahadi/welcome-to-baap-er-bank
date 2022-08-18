// Deposit Part

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositValue = parseFloat(depositField.value);
    // console.log(newDepositValue);
    
    if(newDepositValue>0 || typeof newDepositValue === Number){
        const depositDisplay = document.getElementById('deposit-display');
    let oldDepositValue = parseFloat(depositDisplay.innerText);
    // console.log(oldDepositValue);

    const latestDepositValue = newDepositValue + oldDepositValue;
    // console.log(latestDepositValue);

    depositDisplay.innerText = latestDepositValue;
    // console.log(oldDepositValue);

    // calling balance display
    const balanceDisplay = document.getElementById('balance-display');
    let oldBalance = parseFloat(balanceDisplay.innerText);

    const newBalance = oldBalance + latestDepositValue;
    balanceDisplay.innerText = newBalance;

    }
    
    else{
        alert('Please Enter a valid Amount');
    }
    depositField.value = '';
    
})


// Withdraw Part

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawValue = parseFloat(withdrawField.value);
    // console.log(newwithdrawValue);

    if(newWithdrawValue>0 || typeof newWithdrawValue === Number){const withdrawDisplay = document.getElementById('withdraw-display');
    let oldWithdrawValue = parseFloat(withdrawDisplay.innerText);
    // console.log(oldwithdrawValue);

    const latestWithdrawValue = newWithdrawValue + oldWithdrawValue;
    // console.log(latestwithdrawValue);

    withdrawDisplay.innerText = latestWithdrawValue;
    // console.log(oldwithdrawValue);

    // calling balance display
    const balanceDisplay = document.getElementById('balance-display');
    let oldBalance = parseFloat(balanceDisplay.innerText);

    const newBalance = oldBalance - latestWithdrawValue;
    balanceDisplay.innerText = newBalance;

}
else{
    alert('Please Enter a valid Amount');
}
    

    withdrawField.value = '';
})