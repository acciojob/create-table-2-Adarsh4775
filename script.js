function createTable() {
    //Write your code here
  let inputRows = parseFloat(prompt("Input number of rows"));
	let rn = inputRows.value;
	let inputColumns = parseFloat(prompt("Input number of columns"));
	let cn = inputColumns.value;

	let table = document.getElementById("myTable");

	let tableRow = document.createElement("tr");
		let tableColumn = document.createElement("td");
	     tableColumn.innerText = "Row-" + 0 + "Column-" + 0 ;
         tableRow.appendChild(tableColumn);
	      table.appendChild(tableRow);
}
