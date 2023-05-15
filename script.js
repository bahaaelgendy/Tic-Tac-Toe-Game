
let title = document.querySelector('.title-game')
let turn = "x";
let sqaures = [];

function end(num1, num2, num3) {
    title.innerHTML = `${sqaures[num1]} Winner`;
    document.getElementById('item' + num1).style.background = 'rgb(114, 107, 2)';
    document.getElementById('item' + num2).style.background = 'rgb(114, 107, 2)';
    document.getElementById('item' + num3).style.background = 'rgb(114, 107, 2)';

    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}

function winner() {
    for (let i = 1; i < 10; i++) {
        sqaures[i] = document.getElementById('item' + i).innerHTML;
    }

    if (sqaures[1] == sqaures[2] && sqaures[2] == sqaures[3] && sqaures[3] != '') {
        end(1, 2, 3)
    }
    else if (sqaures[4] == sqaures[5] && sqaures[5] == sqaures[6] && sqaures[5] != '') {
        end(4, 5, 6)

    }
    else if (sqaures[7] == sqaures[8] && sqaures[8] == sqaures[9] && sqaures[8] != '') {
        end(7, 8, 9)
    }
    else if (sqaures[1] == sqaures[4] && sqaures[4] == sqaures[7] && sqaures[4] != '') {
        end(1, 4, 7)
    }
    else if (sqaures[2] == sqaures[5] && sqaures[5] == sqaures[8] && sqaures[5] != '') {
        end(2, 5, 8)
    }
    else if (sqaures[3] == sqaures[6] && sqaures[6] == sqaures[9] && sqaures[6] != '') {
        end(3, 6, 9)
    }
    else if (sqaures[1] == sqaures[5] && sqaures[5] == sqaures[9] && sqaures[5] != '') {
        end(1, 5, 9)
    }
    else if (sqaures[3] == sqaures[5] && sqaures[5] == sqaures[7] && sqaures[5] != '') {
        end(3, 5, 7)
    }

}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X'
        turn = 'o'
        title.innerHTML = 'O'
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X'
    }
    winner();
}