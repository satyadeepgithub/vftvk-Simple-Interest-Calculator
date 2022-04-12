var myUnits = "%";
const d = new Date();
presentYear=d.getFullYear();
function updateTextInput(val) {
    document.getElementById('interestvalue').innerHTML=val +' '+ myUnits; 
  }

  function calculateInterest(){
    var principal=document.getElementById('amount').value;
    var rate=document.getElementById('interestRate').value;
    var time=document.getElementById('years').value;
    var result=(principal*rate*time)/100
    var res= parseInt(result)
    var princi=parseInt(principal)
    var period=parseInt(time)
    var total = res + princi
    var finishingYear = presentYear + period
    document.getElementById('enteredAmount').innerHTML = "If you deposit "+principal;
    document.getElementById('enteredInterestRate').innerHTML = "at a rate of "+ rate+' '+myUnits;
    document.getElementById('totalAmount').innerHTML = "You will receive an amount of "+total;
    document.getElementById('finishingyear').innerHTML = "in the year "+ finishingYear;
    
  }
