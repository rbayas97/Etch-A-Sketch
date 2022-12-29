let container = document.querySelector('.container');
let rowDivs;

function createGrid() {
    let numberGrid = prompt("Enter a number for your grid dimensions. 1-100");
    while (numberGrid >= 101){
        numberGrid = prompt("Enter a number for your grid dimensions. 1-100");
    }
    for (let i = 0; i < numberGrid; i++){
        let columns = document.createElement('div');
        columns.classList.add('column');
        container.appendChild(columns);
        for (let j = 0; j < numberGrid; j++){
            let rows = document.createElement('div');
            rows.classList.add('row');
            columns.appendChild(rows);
        }
    }
}

function colorGrid() {
    rowDivs = document.querySelectorAll('.row')
    for (let k = 0; k < rowDivs.length; k++){
        rowDivs[k].addEventListener('mouseover', () => {
            rowDivs[k].style.backgroundColor = 'black';
        })
    }
}

function clearGrid() {
    const buttonClearGrid = document.querySelector('.btn-2');
    rowDivs = document.querySelectorAll('.row');
    for (let j = 0; j < rowDivs; j++) {
        buttonClearGrid.addEventListener('click', () => {
            rowDivs[k].style.backgroundColor = 'white';
        })
    }
}

function getGridSize() {
    const buttonGridSize = document.querySelector('.btn-1');
    buttonGridSize.addEventListener('click', () => {
        createGrid();
        colorGrid();
        clearGrid();
    })
}

getGridSize();
