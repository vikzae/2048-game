let tiles = null;

document.addEventListener("DOMContentLoaded", function(event) {
    tiles = document.querySelectorAll('.tile');

    let firstTile = Math.floor(Math.random() * 16);
    let secondTile = Math.floor(Math.random() * 16);

    while(firstTile == secondTile) {secondTile = Math.floor(Math.random() * 16);}

    tiles[firstTile].children[0].innerText = Math.round(Math.random() + 1) * 2;
    tiles[secondTile].children[0].innerText = Math.round(Math.random() + 1) * 2;
});

function newNumber() {
    let emptyTiles = [];
    tiles.forEach((tile, index) => {
        if(Number(tile.children[0].innerText ) == 0) {
            emptyTiles.push(index);
        }
    })
    let randomIndex = Math.floor(Math.random() * emptyTiles.length);
    tiles[emptyTiles[randomIndex]].children[0].innerText = Math.round(Math.random() + 1) * 2;
}
