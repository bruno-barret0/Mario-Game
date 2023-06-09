const restartButton = document.querySelector('#restart-button');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() =>  mario.classList.remove('jump'), 500);
}
const loop = setInterval(() =>{
    
    
    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipeposition <= 90 && pipeposition >0 && marioposition < 250) {

        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './image/game-over (1).png';
        mario.style.width = '4%'
        mario.style.marginLeft = '3%'

        clearInterval(loop)
    }
},10);

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);
restartButton.addEventListener('click', () => {
    location.reload();
});