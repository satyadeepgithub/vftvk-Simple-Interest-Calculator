
var myUnits = "%";
const d = new Date();
presentYear=d.getFullYear();
function updateTextInput(val) {
    document.getElementById('interestvalue').innerHTML=val +' '+ myUnits; 
  }
   
  function getfocus() {
    document.getElementById("amount").focus();
  }

  function calculateInterest(){
    var principal=document.getElementById('amount').value;
    if (isNaN(principal) || principal <= 0) {
      alert("Enter a Positive Number");
      return getfocus();
    } 
    var rate=document.getElementById('interestRate').value;
    var time=document.getElementById('years').value;
    var result=(principal*rate*time)/100;
    var period=parseInt(time);
    var finishingYear = presentYear + period;
    var finalRate=rate+myUnits;
    document.getElementById('enteredAmount').innerHTML = "If you deposit <span id='finalPrincipal'>"+principal+"</span>,";
    document.getElementById('enteredInterestRate').innerHTML = "at a rate of <span id='finalRate'>"+ finalRate+"</span>."
    document.getElementById('totalAmount').innerHTML = "You will receive an amount of <span id='total'>"+result+"</span>,";
    document.getElementById('finishingyear').innerHTML = "in the year <span id='end'>"+ finishingYear;+"</span>"
    return dynamicStyle();
  }
  function dynamicStyle(){
    document.getElementById('finalPrincipal').style.backgroundColor="yellow";
    document.getElementById('finalRate').style.backgroundColor="yellow";
    document.getElementById('total').style.backgroundColor="yellow";
    document.getElementById('end').style.backgroundColor="yellow";
   
  }


     
  

  
    
    
    
    
    
    
   
    
    
    
    
    
    
    
  
