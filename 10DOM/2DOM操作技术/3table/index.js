var table=document.createElement('table')
table.border='1'
document.body.appendChild(table)
var tbody=document.createElement('tbody')
table.appendChild(tbody)
tbody.insertRow(0)
tbody.rows[0].insertCell(0)
tbody.rows[0].cells[0].appendChild(document.createTextNode('hh'))