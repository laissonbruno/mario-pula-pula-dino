
// Esse código é um trecho de um jogo de plataforma. Ele contém uma função chamada "jump" que adiciona a classe "jump" ao elemento mario, que é selecionado com o querySelector. A função também tem um setTimeout para remover a classe "jump" após 500 milissegundos.

// O loop é um intervalo que verifica a posição do pipe e da mario. Se o pipe estiver entre 0 e 120 pixels da esquerda e a mario estiver abaixo de 80 pixels, o jogo acaba. O pipe e a mario são então parados, e uma imagem de game over é exibida no lugar da mario. O loop é então interrompido com o clearInterval.

// Por fim, o event listener keydown adiciona a função jump quando uma tecla for pressionada.

// Codigo Desenvolvido por Laisson Bruno - Inspirado em videos e estudos pessoais 

Este código é usado para criar um jogo de plataforma simples. Ele contém uma função chamada jump que adiciona a classe jump ao elemento mario quando o usuário pressiona uma tecla. O loop é um intervalo que verifica se o personagem mario está colidindo com o pipe e, se sim, altera a imagem do personagem para game-over e interrompe o loop. Por fim, ele adiciona um event listener à tecla pressionada para executar a função jump.


const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }

}, 10)



document.addEventListener('keydown', jump);