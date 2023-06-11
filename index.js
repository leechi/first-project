


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