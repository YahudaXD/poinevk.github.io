let loop = 1;

gsap.timeline({repeat:-1, defaults:{duration:1, transformOrigin:'50% 50%'}})
    .add(()=>{
      loop++;
      gsap.set('svg', {attr:{stroke:'hsl('+(loop*65)+',100%, 50%)'}});
      doResize();
    }, 0.1)
    .fromTo('.pt1',   {rotation:200},{duration:1.8, rotation:-80, ease:Power2.easeOut, stagger:-0.1}, 0.15)
    .fromTo('.pt2',   {rotation:100},{duration:1.8, rotation:-84, ease:Power2.easeOut, stagger:-0.1}, 0)
    .from('.pt1',     {duration:1.4, drawSVG:'100% 100%', ease:Power2.easeInOut, stagger:-0.1}, 0)
    .from('.pt2',     {duration:1.4, drawSVG:'100% 100%', ease:Power2.easeOut, stagger:-0.1}, 0.3)
    .to('.pt1',       {drawSVG:0, ease:Power0.easeNone, stagger:-0.1}, 0.8)
    .to('.pt2',       {drawSVG:0, ease:Power0.easeNone, stagger:-0.1}, 0.8)
    .to('.pt1, .pt2', {opacity:0}, 2)
    .from('.pt3',     {duration:2, drawSVG:'0% 0%', ease:Power1.easeInOut}, 1.6)
    .from('.pt4',     {duration:2, drawSVG:'100% 100%', ease:Power1.easeInOut}, 1.5)
    .to('.pt3',       {drawSVG:'100% 100%', ease:Power2.easeIn, stagger:-0.075}, 4)
    .to('.pt4',       {drawSVG:'0% 0%', ease:Power1.easeIn, stagger:-0.075}, 3.8)
    .timeScale(1.3)

function doResize(e){  
  let cw = window.innerWidth,
      ch = window.innerHeight,
      sr = Math.max(cw/1024,ch/768); //scale ratio
  
	gsap.set('.stage',  {x:cw/2-(1024*sr)/2, y:ch/2-(768*sr)/2, scale:sr, transformOrigin:'0 0'});  
}

window.addEventListener('resize', doResize);