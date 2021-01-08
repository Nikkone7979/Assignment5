let row = 1;
let col = 1;


let coloring = false 

//1. add rows to the grid
function addRow() {
    
    let Table = document.getElementById("table");
    let newRow = document.createElement("tr");
    for(let i = 0; i < col; i++) {
        let cell = document.createElement("td");
        
        startCell(cell)

        
        cell.classList.add("uncolored");

        newRow.appendChild(cell);
    }

    Table.appendChild(newRow);
    row++;
}

//2.add rows to the grid
function addColumn() {

    let mainGrid = document.getElementById("table");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;

    for(let i = 0; i < row; i++) {
        let cell = document.createElement("td");
        
        startCell(cell)
        
        allRows[rowCounter].appendChild(cell);

        rowCounter++;
       
    }

   
    col++;

}


// Feature #3: remove rows from the grid 
function removeRow() {
    
    if(row != 1){
    let mainGrid = document.getElementById("table");
    
    mainGrid.deleteRow(row-1);

    row--;
}
}

// #4 removes column
function removeColumn() {

    if(col != 1){
    
    let mainGrid = document.getElementById("table");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;



    for(let i = 0; i < row; i++) {
    
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);

        rowCounter++;
       
    }
     
        col --;
    }
}



// #6 click on a single cell, changing its color to the currently selected color
let currentColor = `${document.getElementById("color-select").value}`

/* click and hold (mouseover) from a single cell (start) 
to a different cell (end) such that all affected/hovered-over 
cells from start to end change to the currently selected color*/
function startCell(cell) {
    
    cell.addEventListener("click", changeColor);
    
    cell.classList.add("uncolored");

   
    cell.addEventListener("mousedown", e => {
        coloring = true
    });

    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });

    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}


let cells = document.getElementsByTagName("td");
let cellList = [...cells];


for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    startCell(cell)
}

function changeColor() {
    this.style.backgroundColor = currentColor;

    this.classList.remove("uncolored")
}

function setCurrentColor(color) {
    currentColor = color;
}

//fill all uncolored cells with the currently selected color

function setUncolored() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });

    uncolored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}
//fill all cells with the currently selected color
function setAllCurrent() {
    // get all cells in the table
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}
//clear all cells/restore all cells to their original/initial color
function clearAll() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'slategray';
        cell.classList.add("uncolored");
    })
}
