function updatePhoneNumber (isIncrese){
    const phoneInputFlied = document.getElementById('phone-input-filed');
    const phoneInputFliedString = phoneInputFlied.value;
    const privusePhoneInputValue = parseInt(phoneInputFliedString);
    let newPhoneInputValue;

    if(isIncrese === true){
      newPhoneInputValue = privusePhoneInputValue + 1;
    }
    else{
        newPhoneInputValue = privusePhoneInputValue - 1;
    }
    phoneInputFlied.value = newPhoneInputValue;
    return newPhoneInputValue;

}

function updateTotalBalance (newPhoneInputValue){
    
  const phoneTotalPrice = newPhoneInputValue * 500;
  const phoneTotalElement = document.getElementById('phone-total');
  phoneTotalElement.innerText = phoneTotalPrice;
}

function subTotalElementById (elementId){
  const phoneTotalElement = document.getElementById(elementId);
  const currantPhoneTotalString = phoneTotalElement.innerText;
  const subTotalAmount = parseInt(currantPhoneTotalString);
  return subTotalAmount;
}



function calculateSubToal (){
  const currantPhoneTotal = subTotalElementById('phone-total');
  const currantCaseTotal = subTotalElementById('case-total');
  const subTotal = currantCaseTotal + currantPhoneTotal;

  const subTotalElement = document.getElementById('sub-total');
  subTotalElement.innerText = subTotal;

  const subTotalValue = subTotal * 0.5;

}


document.getElementById('phone-plus-btn').addEventListener('click', function(){
  const newPhoneInputValue =  updatePhoneNumber(true);
  updateTotalBalance(newPhoneInputValue);

  //Calculate Total 
  
  calculateSubToal ();
 

  
})


document.getElementById('phone-minus-btn').addEventListener('click', function(){
   const newPhoneInputValue =   updatePhoneNumber(false);
   updateTotalBalance(newPhoneInputValue);
   calculateSubToal ()
})