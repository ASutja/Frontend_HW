let tableContent = '<table border="1">';

tableContent += '<tr><td></td>';
for (let i = 1; i <= 10; i++) {
    tableContent += `<td>${i}</td>`;
}
tableContent += '</tr>';

for (let i = 1; i <= 10; i++) {
    tableContent += `<tr>`;

    tableContent += `<td>${i}</td>`;
    
    for (let j = 1; j <= 10; j++) {
 
        tableContent += `<td>${i * j}</td>`;
    }
    tableContent += '</tr>';
}
tableContent += '</table>';

const table = document.getElementById('table');
table.innerHTML = tableContent;
