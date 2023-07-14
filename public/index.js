/* ----------------------------------------------------------
All Selectors for Inputs, Labels, Errors, Outputs and Button
-----------------------------------------------------------*/
// Inputs
let inputDay = document.getElementById('input_day');
let inputMonth = document.getElementById('input_month');
let inputYear = document.getElementById('input_year');
// Labels
const dayLabel = document.getElementById('label_day');
const monthLabel = document.getElementById('label_month');
const yearLabel = document.getElementById('label_year');
// Error
const errorDay = document.getElementById('error_day');
const errorMonth = document.getElementById('error_month');
const errorYear = document.getElementById('error_year');
// Output selectors
const dayOutput = document.getElementById('day_output');
const monthOutput = document.getElementById('month_output');
const yearOutput = document.getElementById('year_output');
// Button Selector
const submitBtn = document.getElementById('submit-btn');


/*------------------------------
Check error and correct functions
------------------------------*/
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

/*------------------------------
Returns amount of Days, Months, and Years
------------------------------*/
function age(inputD, inputM, inputY) {
// 
let date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//Days in every month 

// Determines days and avoids negative number
if(inputD > currentDay){
  currentDay = currentDay + monthDays[currentMonth - 1];
  currentMonth = currentMonth - 1;
}
//Determins Months and avoids negative Number.
if(inputM > currentMonth){
  currentMonth = currentMonth + 12;
  currentYear = currentYear - 1;
}

let d = currentDay - inputD;
let m = currentMonth - inputM;
let y = currentYear - inputY;
// Stored in an array to return the array
let amount = [d, m, y];
return amount;
}

/*------------------------------
Main Function that gets called when the button is clicked.
------------------------------*/
submitBtn.addEventListener('click', ()=>{
  const d = new Date();
  let year = d.getFullYear();

  // Current Age Calls the Age function to get the output result 
  let currentAge = age(inputDay.value, inputMonth.value, inputYear.value);

  /*
  daysInTheMonth stores the correct amount of days in a given month.
  Used: for error checking from user input.
  */
  let daysInTheMonth = new Date(inputYear.value, inputMonth.value, 0).getDate(); 
  
  //checks to seeif all inputs are correct values (if more than 12 months it will send the error message. etc..)
  let dayCorrect = false;
  let monthCorrect = false;
  let yearCorrect = false;
  
  /*------Day, Month and Year Error Checks------*/
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

  /*-------------------------------------------------------------------
  If Errors true nothing will display for all outputs until it is false
  -------------------------------------------------------------------*/
  if(dayCorrect == false || monthCorrect == false || yearCorrect == false){
    dayOutput.innerHTML = '--';
    monthOutput.innerHTML = '--';
    yearOutput.innerHTML = '--';
  }else{
    // CountUp Function is called to display outputs with interval to count up from 0 up to the results number.
    countUp(currentAge[0], dayOutput);
    countUp(currentAge[1], monthOutput);
    countUp(currentAge[2], yearOutput);
  }
})

/*-------------------------------------------------
Function to make the age counter go up when submitted
Resource for solution: https://digifisk.com/counter-in-javascript/
-------------------------------------------------*/
function countUp(currentAgeResults, dateOutPut){
  let output = 0;
  let interval = setInterval(() => {
    if(output == currentAgeResults) {
      dateOutPut.innerHTML = output;
      clearInterval(interval);
      return;
    }
    dateOutPut.innerHTML = output;
    output++;
  },50);
};