
const cta = document.querySelector(".cta")

//create a repeating scale tween
const scaleTween = gsap.to(cta, {scale:1, repeat:-1, yoyo:true, paused:true});

//event listeners 
cta.addEventListener("mouseenter", ()=> scaleTween.restart())
cta.addEventListener("mouseleave", ()=> {
	scaleTween.pause()
	//create a new tween to return to normal size smoothly
	gsap.to(cta, {scale:0.8})
	
})

console.log("fuck boris johnson")