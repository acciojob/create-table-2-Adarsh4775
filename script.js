function createTable() {
    let inputRows = parseFloat(prompt("Input number of rows"));
    let inputColumns = parseFloat(prompt("Input number of columns"));

    // Check if the inputs are valid numbers
    if (isNaN(inputRows) || isNaN(inputColumns) || inputRows <= 0 || inputColumns <= 0) {
        alert("Invalid input. Please enter valid numbers for rows and columns.");
        return;
    }

    let rn = Math.floor(inputRows); // Ensure a whole number of rows
    let cn = Math.floor(inputColumns); // Ensure a whole number of columns

    let table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = '';

    // Create rows and columns based on user input
    for (let i = 0; i < rn; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < cn; j++) {
            let tableColumn = document.createElement("td");
            tableColumn.innerText = "Row-" + i + " Column-" + j;
            tableRow.appendChild(tableColumn);
        }

        table.appendChild(tableRow);
    }
}
