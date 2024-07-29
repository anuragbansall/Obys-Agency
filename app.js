{(function locoMotive(){
  // LocoMotive ScrollTrigger Codepen
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
})()}

// GSAP
let tl = gsap.timeline()

// Cursor - Shery.js
{(function cursor(){
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1
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

// Image Effect - Shery.js 
{(function sheryImageEffect(){
  Shery.imageEffect("#page3 .cards-container .card", {
    style: 2,
    gooey: true,
  })
})()}

// Video Cursor Animation
{(function videoCursor(){
  const videoContainer = document.querySelector('#page2 #video-container')
  videoContainer.addEventListener('mouseenter', function(){
    gsap.to(".mousefollower", {
      opacity: 0
    })

    videoContainer.addEventListener("mousemove", function(e){
      gsap.to("#video-container #video-cursor", {
        left: e.clientX - 500,
        y: e.clientY - 200,
        duration: 1
      })
    })
  })
  
  videoContainer.addEventListener("mouseleave", function(){
    gsap.to(".mousefollower", {
      opacity: 1
    })
    gsap.to("#video-container #video-cursor", {
      left: '70%',
      y: 0,
      duration: 1
    })
  })
})()}

// Video Play/Pause
{(function videoPlayPause(){
  const videoContainer = document.querySelector('#page2 #video-container')
  const video = document.querySelector("#page2 #video-container video")
  const videoCursor = document.querySelector("#video-container #video-cursor")

  let isPlay = false

  videoContainer.addEventListener("click", function(){
    isPlay = !isPlay
    if(isPlay){
      gsap.to("#page2 #video-container img", {
        opacity: 0
      })
      gsap.to("#video-container #video-cursor", {
        scale: 0.5
      })
      video.play()
      videoCursor.innerHTML = `<i class="fa-solid fa-pause"></i>`
    }else{
      gsap.to("#page2 #video-container img", {
        opacity: 1
      })
      gsap.to("#video-container #video-cursor", {
        scale: 1
      })
      video.pause()
      videoCursor.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
  })
})()}

{/* <i class="fa-solid fa-play"></i> */}