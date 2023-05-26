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

function setTextElementValueById (elementId, value){
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;

}


function calculateSubToal (){
  const currantPhoneTotal = subTotalElementById('phone-total');
  const currantCaseTotal = subTotalElementById('case-total');
  const subTotal = currantCaseTotal + currantPhoneTotal;

  setTextElementValueById('sub-total', subTotal)

  //calculate 

 

  const subTotalText = subTotal * 0.1;
  setTextElementValueById('tex-total', subTotalText.toFixed(2));

  const finalTotal = subTotal + subTotalText;
  setTextElementValueById('total-amount', finalTotal);

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