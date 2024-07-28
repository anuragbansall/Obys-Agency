
// LocoMotive
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


// GSAP
let tl = gsap.timeline()

// Cursor - GSAP
{(function cursor(){
  document.addEventListener("mousemove", e => {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY
    })
  })
})()}

// Loader - GSAP
{(function loader(){

  tl.from("#loader .line h1", {
    y: 150,
    stagger: 0.2
  })

  tl.from("#loading-time, .line h2", {
    opacity: 0,
    duration: 1,
    onStart: function(){
      let counter = 0
      let intervalId = setInterval(() => {
        document.querySelector('#loading-time h5').innerHTML = ++counter
        if(counter === 100){
          clearInterval(intervalId)
        }
      }, 30);
    }
  })

  tl.to("#loader h2", {
    animationName: "nowAnime",
    opacity: 1
  })

  tl.to("#loader", {
    opacity: 0,
    display: "none",
    duration: 1,
    delay: 1.5,
  })

  tl.from("#page1", {
    y: 1200,
    opacity: 0
  })
})}

// Navbar - GSAP
{(function navbar(){
  tl.from("#nav svg, #nav a", {
    y: -100,
    opacity: 0,
    stagger: 0.1
  })
})()}

// Page1 - GSAP
{(function page1(){
  // let tl = gsap.timeline()

  tl.from("#page1 #center-lines h1", {
    y: 100,
    stagger: 0.1
  })
})()}

// Magnetic Effect Shery.js
{(function magneticEffect(){
  Shery.makeMagnet("#nav a");
})()}