let amountofRows = 1;
let amountofColumns = 2;


let coloring = false 


function addRow() {
    
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");
    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        
        startCell(cell)

        
        cell.classList.add("uncolored");

        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountofRows++;
}


function addColumn() {

    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)
        
        allRows[rowCounter].appendChild(cell);

        rowCounter++;
       
    }

   
    amountofColumns++;

}


/* Feature #3: remove rows from the grid */
function removeRow() {
    
    let mainGrid = document.getElementById("main-grid");
    
    mainGrid.deleteRow(amountofRows-1);

    amountofRows--;
}


function removeColumn() {
    
    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;



    for(let i = 0; i < amountofRows; i++) {
    
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);

        rowCounter++;
       
    }

    amountofColumns--;
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
        cell.style.backgroundColor = 'slategrsy';
        cell.classList.add("uncolored");
    })
