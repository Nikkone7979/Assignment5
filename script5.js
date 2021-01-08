let row = 1;
let col = 1;


let coloring = false 


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


/* Feature #3: remove rows from the grid */
function removeRow() {
    
    if(row != 1){
    let mainGrid = document.getElementById("table");
    
    mainGrid.deleteRow(row-1);

    row--;
}
}


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




let currentColor = `${document.getElementById("color-select").value}`


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

function setAllCurrent() {
    // get all cells in the table
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}

function clearAll() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'slategray';
        cell.classList.add("uncolored");
    })
}
