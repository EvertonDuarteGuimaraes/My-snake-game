let game_screen = document.getElementById('game_field');
let context = game_screen.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
};

function creat_screen_background() {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function creat_snake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'blue';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

creat_screen_background();
creat_snake();

console.log(head);

//1-leia que que está acontecendo
//2-atualizar os objetos com informações necessárias
//3-check de overlaping
//4-verificar as regras do jogo
//5-renderizar na tela
