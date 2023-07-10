// Inputs
let inputDay = document.getElementById('input_day');
let inputMonth = document.getElementById('input_month');
let inputYear = document.getElementById('input_year');
// Labels
const dayLabel = document.getElementById('label_day')
const monthLabel = document.getElementById('label_month')
const yearLabel = document.getElementById('label_year')
// Error
const errorDay = document.getElementById('error_day');
const errorMonth = document.getElementById('error_month');
const errorYear = document.getElementById('error_year');


// Output selectors
const dayOutput = document.getElementById('day_output');
const monthOutput = document.getElementById('month_output');
const yearOutput = document.getElementById('year_output');

// button
const submitBtn = document.getElementById('submit-btn');

const d = new Date();
let year = d.getFullYear();


// Check error and correct functions
function errorCheck(input, label, error) {
    input.classList.remove('input');
    input.classList.add('error');
    label.classList.add('text-red')
    error.classList.add('text-red');
}
function correctCheck(input, label, error) {
    input.classList.add('input');
    input.classList.remove('error');
    label.classList.remove('text-red')
    error.classList.remove('text-red');
    error.innerHTML = "";
}


//Function that determins works the math on your age
function age(inputD, inputM, inputY) {
let birthDay = inputD;
let birthMonth = inputM;
let birthYear = inputY;

let date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();

let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//Days in every month 

if(birthDay > currentDay){
  currentDay = currentDay + monthDays[currentMonth - 1];
  currentMonth = currentMonth - 1;
}
if(birthMonth > currentMonth){
  currentMonth = currentMonth + 12;
  currentYear = currentYear - 1;
}
let d = currentDay - birthDay;
let m = currentMonth - birthMonth;
let y = currentYear - birthYear;
let amount = [d, m, y];

// console.log(d, m, y); //Checking for my code to be correct by console.logging
return amount;
}


// Main Function that gets called when the button is clicked.

submitBtn.addEventListener('click', ()=>{
  
  let currentAge = age(inputDay.value, inputMonth.value, inputYear.value);

  //This give the days there correct amount of days in the month so that depending on the month you have to place the correct days. EX. if its feburary it won't allow you to out put 30, 31, on other months it will.
  let daysInTheMonth = new Date(inputYear.value, inputMonth.value, 0).getDate(); 
  
  let dayCorrect = false;
  let monthCorrect = false;
  let yearCorrect = false;

  
  // Day
  if(inputDay.value > daysInTheMonth){
    errorCheck(inputDay, dayLabel, errorDay);
    errorDay.innerHTML = "Must be a valid day";
  }else if(inputDay.value == 0){
    errorCheck(inputDay, dayLabel, errorDay);
    errorDay.innerHTML = "This value is required";
  }else{
    correctCheck(inputDay, dayLabel, errorDay);
    dayCorrect = true;
    
  }
  
  // Month
  if(inputMonth.value > 12){
    errorCheck(inputMonth, monthLabel, errorMonth);
    errorMonth.innerHTML = "Must be a valid month";
  }else if(inputMonth.value == 0){
    errorCheck(inputMonth, monthLabel, errorMonth);
    errorMonth.innerHTML = "This value is required";
  }else{
    correctCheck(inputMonth, monthLabel, errorMonth);
    monthCorrect = true;
    
  }

  // Year
  if(inputYear.value > year){
    errorCheck(inputYear, yearLabel, errorYear);
    errorYear.innerHTML = "Must be in the past";
  }else if(inputYear.value == 0){
    errorCheck(inputYear, yearLabel, errorYear);
    errorYear.innerHTML = "This value is required";
  }else{
    correctCheck(inputYear, yearLabel, errorYear);
    yearCorrect = true;
  }


  if(dayCorrect == false || monthCorrect == false || yearCorrect == false){
    dayOutput.innerHTML = '--';
    monthOutput.innerHTML = '--';
    yearOutput.innerHTML = '--';
  }else{
    dayOutput.innerHTML = currentAge[0];
    monthOutput.innerHTML = currentAge[1];
    yearOutput.innerHTML = currentAge[2];
  }
})