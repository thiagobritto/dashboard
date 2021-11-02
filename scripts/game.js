let time = 0;

window.addEventListener('DOMContentLoaded', () => {
    let level = window.location.search.substr(1, 1);
    switch (level) {
        case '3':
            time = 30;
            break;
        case '2':
            time = 60;
            break;
        default:
            time = 120;
            break;
    }
    //alert(time);
    document.querySelector("#watch-time").innerHTML = time;

    let qtd_balls = 80;

    printBall(qtd_balls);

    document.querySelector('#balls').innerHTML = qtd_balls;
    document.querySelector('#balls-pow').innerHTML = 0;

    countTime(time + 1)

});

let timeStamp = null;

const countTime = time => {
    time--;
    if (time < 0) {
        clearTimeout(timeStamp);
        alertModal(false);
        return false;
    }

    document.getElementById('watch-time').innerHTML = time;
    timeStamp = setTimeout(`countTime(${time})`, 1000);
}

const printBall = qtd => {
    for (let i = 0; i < qtd; i++) {
        let ball = new Image(48, 48);
        ball.src = './imagens/balao_azul_pequeno.png';
        ball.style = `
            margin: 5px;
            cursor:pointer;
        `;
        ball.onclick = pow
        document.getElementById('background').appendChild(ball);
    }
}

const pow = event => {
    event.target.src = './imagens/balao_azul_pequeno_estourado.png';
    event.target.setAttribute('onclick', '');
    checkPoint();
}

const checkPoint = () => {

    let balls = document.querySelector('#balls');
    let ballsPow = document.querySelector('#balls-pow');

    ballsPow.innerHTML = parseInt(ballsPow.innerHTML) + 1;
    balls.innerHTML = parseInt(balls.innerHTML) - 1;

    if (!parseInt(balls.innerHTML)) won();
}

const won = () => {
    let point = time - parseInt(document.getElementById('watch-time').innerHTML);
    if (point < time) {
        alertModal(`
            <h2>Congratulations you won!<h2> 
            
            <p style="font-size:20px">
                <strong> Performance: </strong> 
                <span style="color: red">${point}s</span>
            </p>
        `);
    } else if (point == time) {
        alertModal(`
            Game Over! <br><br>
            <span style="color: red; font-size: 16px">
                you exploded after time expired
            </span>
        `);
    }
}


const toggleModal = className => {
    const panel = document.querySelector('#overlay');
    panel.classList.toggle(className);
    const modal = document.querySelector('#alert');
    modal.classList.toggle(className);
}

const alertModal = message => {
    const modalMessage = document.querySelector('#message');
    if (message) {
        modalMessage.innerHTML = message;
    } else {
        modalMessage.innerHTML = `
            <h2>Game Over!<h2>
        `;

    }
    toggleModal('hideModal');
    clearTimeout(timeStamp);
    //return false;
}

const restart = () => {
    let level = document.querySelector('#level').value;
    window.location.href = `game.html?${level}`;
}