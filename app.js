(function loader(){
  let tl = gsap.timeline()

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
      }, 50);
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
    delay: 4,
  })

  tl.from("#page1", {
    y: 1200,
    opacity: 0
  })
})()