
document.getElementById("loan-form").addEventListener("submit",function(e){
    document.querySelector("#loading").style.display='block';
    document.querySelector("#results").style.display='none';

    
    calculateing();
    e.preventDefault();
} );
function calculateing() {
    setTimeout(function(){ calculateResults();  }, 3000);
}


function calculateResults() {

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
  
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
  
    if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
      
      document.querySelector("#loading").style.display='none';
      document.querySelector("#results").style.display='block';


    } else {
      showError('Please check your numbers');
      document.querySelector("#loading").style.display='none';
    }
  

 

}

function showError(error){

    const errorDiv = document.createElement('div');

    errorDiv.className = 'alert alert-danger';
    
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    card.insertBefore(errorDiv,heading);

    removeError();

   
}
function removeError() {
    setTimeout(function(){document.querySelector(".alert").remove();  }, 3000);
}

