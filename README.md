# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot
![Design preview for the Age calculator app coding challenge](./public/design/desktop-completed.jpg)

### Links
- Live Site URL: [Demo](https://abiel101.github.io/Age-Calculator.io/public/index.html)

## My process
<!-- Explain my over all process on how I managed to brake it down and figure out how to build the website little by little. -->
### Built with

- HTML 5
- Tailwind CSS
- Javascript
- NodeJS
### What I learned

I learned alot. The first thing I learn is that I need a brush up in my JavaScript which is exactly what I did. I utilized some of the knowledge I had to be able to return data from a function as an array which is how I get the output results. It was a lot of trial an error but definitly a lot of fun seeing where I could improve my skills in javascript.

### Code Highlights

<h3 style="color:#25a8b5; font-weight:bold">Tailwind CSS</h3>
My First customs Tailwind CSS classes help me create the input and when ever they have an error.

```css
.input{
  @apply border border-borderGray hover:border-accent rounded-md text-2xl font-semibold px-6 py-3 w-full focus:border-accent cursor-pointer outline-none;
}
.error{
  @apply border border-red-500 hover:border-red-500 rounded-md text-2xl font-semibold px-6 py-3 w-full focus:border-accent cursor-pointer outline-none;
}
.text-red{
  @apply text-red-500 translate-x-5;
}
```
<br>
<h3 style="color: #cbc127; font-weight: bold;">Javascript</h3>
This variable stores the number of days there are in the month that the user inputs. Once the user clicks enter the value inside this variable gets used to determine whether or not the user inputed the correct amount of days in the specific month they chose.

```js
let daysInTheMonth = new Date(inputYear.value, inputMonth.value, 0).getDate(); 

if(inputDay.value > daysInTheMonth){
    errorCheck(inputDay, dayLabel, errorDay);
    errorDay.innerHTML = "Must be a valid day";
  }

```

### Continued development

Over all this project was a great challenge that I was able to take on and test my new tailwind CSS skills. Despite that I did see places where I could improve my skills.

<p style="font-weight:bold; text-decoration: underline; color: #25a8b5;">Tailwind CSS</p>
For tailwind my focus will be to improve my layout skills. Tailwind CSS prioritize mobile first meaning that it is best to start with mobile and then work you way up to tablet, desktop screen size and larger. Since on my practice projects it has always been desktop first then mobile I will work on improving my skill to work the other way around. 
Then I will also deepen my knowledge in tailwind to utilize other parts of tailwind CSS like creating more custom classes and possibly a themes to have a dark mode and light mode on my next project.

<br>
<p style="font-weight: bold; text-decoration: underline; color: #cbc127;">Javascript</p>
For Javascript, I will aim to not have so many if/else statements. I noticed how I utilized that heavily on this project and although it gave me the solution I wanted there could be better ones. Maybe the way I organize my javascript could also use some improvement as well.

### Useful resources

- [Javascript Age Calculator](https://dev.to/code_mystery/javascript-age-calculator-calculate-age-from-date-of-birth-o9b) - This article by Foolish Developer, helped me to understand how I could get the result for the amount of days.

- [Tailwind CSS Website](https://tailwindcss.com/docs/installation) - This is the resource I used to write my tailwind CSS. Although I have my own notes, there were somethings that I needed to figure out that I didn't have on my notes. The Tailwind CSS website is a pretty amazing resource to quickly find the classes you need for centering, changing colors, etc.

## Author

- Website - [Abiel Ortega](https://abiel-code-dev.webflow.io)
- Frontend Mentor - [@Abiel101](https://www.frontendmentor.io/profile/Abiel101)
- Twitter - [@abielcodedev](https://www.twitter.com/abielcodedev)
