const tl = gsap.timeline({defaults:{duration:0.75, ease: "power1.out"}})


tl.fromTo('.cookie-container', {scale:0}, {scale:1,ease: "elastic.out(1,0.3)", duration:1.3} )
tl.fromTo('.cookie', {opacity:0, x:-50, rotation: '-45deg'}, {opacity:1, x:0 , rotation: '0deg'}, '<50%')
tl.fromTo('.text', {x:30, opacity:0}, {opacity:1, x:0}, '<20%' )
tl.fromTo('.crumbs', {rotation: '0deg'}, {rotation: '-45deg'})

const button = document.querySelector('button');

button.addEventListener('click', () => {
  tl.reverse();
})