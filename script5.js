 let amountofRows = 1;
    let amountofColumns = 2;

let x = document.getElementById("addRow");
x.addEventListener("click", AddRow);
function AddRow() {
   
} 
function addColumn(){
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        
        startCell(cell)
        
        allRows[rowCounter].appendChild(cell);

        rowCounter++;
        // newRow.appendChild(cell);
    }

    // mainGrid.appendChild(newRow);
    amountofColumns++;
}

function startsCell(cell) {
    // change color on click
    cell.addEventListener("click", changeColor);
    // give cell as class called "uncolored"
    cell.classList.add("uncolored");

    /* Feature #10:
        click and hold (mouseover) from a single cell (start) to a different cell (end) 
        such that all affected/hovered-over cells from start to end change to the 
        currently selected color
    */

    // on mousedown, start coloring
    cell.addEventListener("mousedown", e => {
        coloring = true
    });

    // if coloring, set background color of cell to the currentColor and remove the uncolored class
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });

    // if coloring, on mouseup, set coloring to false
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}

/* Feature #4: remove columns from the grid */
function removeColumn() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;



    for(let i = 0; i < amountofRows; i++) {
    
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);

        rowCounter++;
       
    }

    amountofColumns--;
}