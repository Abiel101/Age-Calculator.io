const logoText = new SplitType('#logo-text');

gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0,
  duration: .1
})

gsap.to('#loader', {
  width: 0,
  delay: 3,
  duration: 2
})

gsap.to('.char', {
  opacity: 0,
  delay: 2,
  duration: 1
})

gsap.fromTo('#calculator', {
  y: 50,
  opacity: 0,
},{
  y: 0,
  opacity: 1,
  delay: 3.5,
  duration: 1,
})