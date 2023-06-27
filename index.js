const table = document.getElementById('multiplication-table');

function createMultiplicationTable(size) {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement('tr');

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement('td');
      cell.textContent = i * j;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

createMultiplicationTable(10);
