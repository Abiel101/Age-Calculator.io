// Loading animation 
const logoText = new SplitType('#logo-text');
gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  ease: "expo.out",
  duration: 1.5
})

gsap.to('#loader', {
  width: 0,
  delay: 4,
  duration: 2
})

gsap.to('.char', {
  opacity: 0,
  delay: 3,
  duration: 1
})

gsap.fromTo('#calculator', {
  y: 50,
  opacity: 0,
},{
  y: 0,
  opacity: 1,
  delay: 4.5,
  duration: 1,
})


// Removing the overflow-hidden on body to be able to scroll after 6 seconds
const body = document.getElementById("body");

let interval = setInterval(bodyLog, 6000);
function bodyLog(){
  body.classList.remove("overflow-hidden");
  clearInterval(interval);
}

