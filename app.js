let tiles = null;
let gameOn = true;

document.addEventListener("DOMContentLoaded", function(event) {
    document.onkeydown = chackKey;
    tiles = document.querySelectorAll('.tile');
    start();
});
function start() {
let firstTile = Math.floor(Math.random() * 16);
let secondTile = Math.floor(Math.random() * 16);

while(firstTile == secondTile) {secondTile = Math.floor(Math.random() * 16);}

tiles[firstTile].children[0].innerText = Math.round(Math.random() + 1) * 2;
tiles[secondTile].children[0].innerText = Math.round(Math.random() + 1) * 2;
}

function newNumber() {
    let emptyTiles = [];
    tiles.forEach((tile, index) => {
        if(Number(tile.children[0].innerText ) == 0) {
            emptyTiles.push(index);
        }
    })
    let randomIndex = Math.floor(Math.random() * emptyTiles.length);
    if (emptyTiles.length != 0 ) {
    tiles[emptyTiles[randomIndex]].children[0].innerText = Math.round(Math.random() + 1) * 2;
    } else {
        GameOver()
    }
}

function left() {
    let a = row(0,1,2,3);
    let b = row(4,5,6,7);
    let c = row(8,9,10,11);
    let d = row(12,13,14,15);
}
function right() {
    let a = row(3,2,1,0);
    let b = row(7,6,5,4);
    let c = row(11,10,9,8);
    let d = row(15,14,13,12);
}
function up() {
    let a = row(0,4,8,12);
    let b = row(1,5,9,13);
    let c = row(2,6,10,14);
    let d = row(3,7,11,15);
}
function down() {
    let a = row(12,8,4,0);
    let b = row(13,9,5,1);
    let c = row(14,10,6,2);
    let d = row(15,11,7,3);
}

function row(firstTile,secondTile,thirdTile, fourthTile) {
    
    let inputs = [firstTile, secondTile, thirdTile, fourthTile]
    let a = Number(tiles[firstTile].children[0].innerText);
    let b = Number(tiles[secondTile].children[0].innerText);
    let c = Number(tiles[thirdTile].children[0].innerText);
    let d = Number(tiles[fourthTile].children[0].innerText);
    
    let value = [];
    let res = [];

    if(a != 0 ) {value.push(a)}
    if(b != 0 ) {value.push(b)}
    if(c != 0 ) {value.push(c)}
    if(d != 0 ) {value.push(d)}
    for(let i = 0; i < value.length; i++) {
        if(value[i + 1] !== 'undefined' ) {
            if(value[i] == value[i + 1]) {
                res.push(value[i] + value[i + 1]);
                
                i = i + 1;
            }else {
                res.push(value[i])
            }
        }else {
            res.push(value[i])
        }
    }
    let output =[];
    let totalTiles = 0;
    for (let i = totalTiles; i < res.length; i++) {
        tiles[inputs[i]].children[0].innerText = '' + res[i];
        output.push(res[i]);
        totalTiles++;
    }

    while (totalTiles < 4) {
        tiles[inputs[totalTiles]].children[0].innerText = '0';
        output.push(0)
        totalTiles++;
    }
}

function chackKey(key) {
    key = key || window.event;

    if(key.keyCode == 37) {
        left()
        newNumber()
    }
    if(key.keyCode == 39) {
        right()
        newNumber()
    }
    if(key.keyCode == 38) {
        up()
        newNumber()
    }
    if(key.keyCode == 40) {
        down()
        newNumber()
    }
    if(key.keyCode == 71) {
        gameOver()
    }
    if(key.keyCode == 82) {
        restart()
    }
    
}
function restart() {
    for (let i = 0 ; i < tiles.length; i++) {
        tiles[i].children[0].innerText = '0'
    }
    document.getElementById('gameover').style.display = 'none';
    start()
}
function gameOver() {
     gameOn = false;
     document.getElementById('gameover').style.display = 'block';
}