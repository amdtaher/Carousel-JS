const images = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.slider-dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const play = document.querySelector('.play');
const stops = document.querySelector('.stop');
let current = 0;
let sets;

function slideShow(){
    if (current < 0) {
        current = images.length - 1;
    }
    if (current >= images.length) {  
        current = 0;
    }
}
function removes(){
    images[current].classList.remove('active');
    dot[current].classList.remove('activedot');
}
function actives(index){
    current = index;
    images[current].classList.add('active');
    dot[current].classList.add('activedot');
}
prev.addEventListener('click', ()=>{
    removes();
    current--;
    slideShow();
    actives(current);
})
next.addEventListener('click', ()=>{
    clearInterval(sets);
    removes();
    current++;
    slideShow();
    actives(current);
})
play.addEventListener('click', ()=>{
    clearInterval(sets);
    sets = setInterval(() => {
        removes();
        current++;
        slideShow();
        actives(current);
    }, 1000)
})
stops.addEventListener('click', ()=>{
    clearInterval(sets);
})
dot.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        removes();
        actives(index);
        clearInterval(sets);
    })
});
sets = setInterval(() => {
    removes();
    current++;
    slideShow();
    actives(current);
}, 2000);
