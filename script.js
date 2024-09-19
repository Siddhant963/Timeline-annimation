var ti = gsap.timeline();
var menu = document.querySelector('.nav>i');
var cross = document.getElementById("cross");
console.log(cross);

ti.to ( ".full", { 
    right:0 ,
    duration:0.3,
})
ti.from(".full h4,#cross",{ 
    x:100,
    duration:1, 
    stagger:0.12,
    opacity:0,
})
ti.pause()

menu.addEventListener('click', function() {
    ti.play();
});
cross.addEventListener('click', function() {
    // ri.reverse();
    ti.reverse();
    
});