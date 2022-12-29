let container = document.querySelector('container');

function createGrid() {
    let numberGrid = prompt("Enter a number for your grid dimension. 1-100");
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
createGrid();