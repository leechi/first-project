let home = document.querySelector('.nav-bar-title')
let itsme = document.querySelector('#itsme-t')
let about = document.querySelector('#about-scroll')


about.addEventListener('click', () => {
    window.scrollTo({top:1600, behavior :"smooth"})
})


home.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior : "smooth"});
    
})


itsme.addEventListener('click', () => {
    window.scrollTo({top:800, behavior:"smooth"});
})



document.querySelector('.travle-btn').addEventListener('click', ()=>{
    document.querySelector('.travle-btn').classList.remove('inverted');
    document.querySelector('.dream-btn').classList.add('inverted');
    document.querySelector('.dream').classList.add('hidden')
    document.querySelector('.travle').classList.remove('hidden')
    
})

document.querySelector('.dream-btn').addEventListener('click', ()=>{
    document.querySelector('.dream-btn').classList.remove('inverted');
    document.querySelector('.travle-btn').classList.add('inverted');
     document.querySelector('.dream').classList.remove('hidden')
    document.querySelector('.travle').classList.add('hidden')
})



// dark mode

let darkmode = document.querySelector('.dark-mode')
let count = 0;
let helloSkyImg = document.querySelector('.hello-sky');


darkmode.addEventListener('click', () => {
    count++;
    if (count % 2 == 0) {
        darkmode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        helloSkyImg.src = "asset/sky.jpeg" + Date.now();
        document.querySelector('.nav-bar').style.backgroundColor = "white";
    } else {
        darkmode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        helloSkyImg.src = "asset/sky.jpeg" + Date.now();
        document.querySelector('.nav-bar').style.backgroundColor = "black";
    }
});
