function init(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init();
var tl=gsap.timeline();
tl.from(".nav h4, .nav .circle",{
  y:-50,
  opacity:0,
  duration:0.5,
  stagger:0.1,
  delay:0.7
})
tl.from(".hero h1",{
  y:50,
  opacity:0,
  stagger:0.1,
  duration:0.5
})
tl.from(".pg2 h5",{
  x:50,
  opacity:0,
  duration:0.5,
  stagger:0.1
})
tl.from(".pg2 video",{
  y:100,
  opacity:0,
  duration:0.5
})
gsap.from(".pg3 h1",{
  y:100,
  opacity:0,
  scrollTrigger:{
    scroller:"main",
    trigger:".pg3 h1",
    start:"top 45%",
    end:"top 15%",
  
  }
})
gsap.from(".pg3 h3",{
  y:100,
  opacity:0,
  scrollTrigger:{
    scroller:"main",
    trigger:".pg3 h3",
    start:"top 45%",
    end:"top 15%",
    
  }
})
gsap.from(".pg3 p",{
  y:100,
  opacity:0,
  scrollTrigger:{
    scroller:"main",
    trigger:".pg3 p",
    start:"top 45%",
    end:"top 15%",
  
  }
})
gsap.from(".pg4 hr",{
  width:0,
  opacity:0,
  scrollTrigger:{
    scroller:"main",
    trigger:".pg4 hr",
    start:"top 45%",
    end:"top 15%",
      }
})
gsap.from(".pg4 h1",{
  y:-100,
  opacity:0,
  scrollTrigger:{
    scroller:"main",
    trigger:".pg4 h1",
    start:"top 45%",
    end:"top 15%",
    
  }
})
gsap.to(".hero ul div",{
  width:"98vw",
scrollTrigger:{
    scroller:"main",
    trigger:".hero ul div",
    start:"top 17%",
    end:"top -17%",
    scrub:3
}
}) 

gsap.to(".pg2 video, .pg2 .top",{
    width:"90%",
    scrollTrigger:{
        scroller:"main",
        trigger:".pg2",
        start:"top 60%",
        end:"top 0%",
        scrub:3,

    }
    }) 
 
  document.querySelectorAll(".pg6 section").forEach(function(el){
el.addEventListener("mousemove",function(dets){
  gsap.to(el,{
    color:"white"
  })
  gsap.to(el.querySelector("img"),{
    top:dets.clientY-150,
    left:dets.clientX-150,
    opacity:1
  })
})
el.addEventListener("mouseleave",function(){
  gsap.to(el,{
    color:"#575455"
  })
  gsap.to(el.querySelector("img"),{
    opacity:0
  })
})
  })
  document.querySelector("main").addEventListener("mousemove",function(dets){
    gsap.to(".crsr",{
      left:dets.x,
      top:dets.y,
      duration:0.5,
      display:"flex"
    })
  })
  var tl1=gsap.timeline({
    scrollTrigger:{
      scroller:"main",
      trigger:"main",
      start:"top -150%",
      end:"top -165%",
      scrub:2
    }
  })
tl1.to("main",{
  backgroundColor:"white",
  color:"black"
})
var tl2=gsap.timeline({
  scrollTrigger:{
    scroller:"main",
    trigger:"main",
    start:"top -410%",
    end:"top -430%",
    scrub:2
  }
})
tl2.to("main",{
  backgroundColor:"black",
  color:"white"
})