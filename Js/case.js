function updateCaseNumber (isIncrese){
    const caseInputFlied = document.getElementById('case-input-flied');
    const caseInputFliedString = caseInputFlied.value;
    const casePreviusInputValue = parseInt(caseInputFliedString);
     let  caseNewInputValue ;
     if(isIncrese === true){
       caseNewInputValue = casePreviusInputValue + 1;
     }
     else{
        caseNewInputValue = casePreviusInputValue - 1;
     }

     caseInputFlied.value = caseNewInputValue;

     return caseNewInputValue;
}


function updateCaseTotalPrice (caseNewInputValue){
    const caseTotal = caseNewInputValue * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotal;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
   const caseNewInputValue =  updateCaseNumber(true);
   updateCaseTotalPrice (caseNewInputValue);
   
    
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
   const caseNewInputValue =  updateCaseNumber(false);
     updateCaseTotalPrice (caseNewInputValue);
})