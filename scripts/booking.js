/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCounter = 0;
let dailyRate = 35;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let days = Array.from(document.querySelectorAll(".day-selector")[0].children);
days.forEach(function (day) {
    day.addEventListener("click", function() {
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
        dayCounter--;
    } else {
        day.classList.add("clicked");
        dayCounter++;
    }
   calculate();
    });
});
  



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


let clear = document.querySelector("#clear-button");
clear.addEventListener("click", function(){
    days.forEach(function (day) {
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
    }
    });
    dayCounter = 0;
    calculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let half = document.querySelector("#half");

half.addEventListener("click",function (){
    dailyRate = 20;
    full.classList.remove("clicked");
    half.classList.add("clicked");
    calculate();
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let full = document.querySelector("#full");

full.addEventListener("click", function (){
    dailyRate = 35;
    half.classList.remove("clicked");
    full.classList.add("clicked");
    calculate();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
let cost = document.querySelector("#calculated-cost");
function calculate() {
    let totalCost = 0;
    totalCost = dailyRate * dayCounter;
    cost.innerHTML = totalCost;
  
}
