let game_screen = document.getElementById('game_field');
let context = game_screen.getContext('2d');
let snake = [];

const snake_head = document.getElementById('head');

snake_head.addEventListener('load', (e) => {
    context.drawImage(snake_head, 8, 8, 32, 32);
});

function creat_screen_background() {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, 512, 512);
}

creat_screen_background();

//1-leia que que está acontecendo
//2-atualizar os objetos com informações necessárias
//3-check de overlaping
//4-verificar as regras do jogo
//5-renderizar na tela
