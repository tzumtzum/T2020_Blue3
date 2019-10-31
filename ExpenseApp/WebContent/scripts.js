/**
 *
 */
var data = [
  { amount: 50, tag: "F&B", date: "01-01-2018" },
  { amount: 20, tag: "Transport", date: "02-01-2018" }
];

function generateTables(data) {
  var divTable = document.getElementById("table");
  divTable.innerHTML = "<tr><th>Amount ($)</th><th>Tag</th><th>Date</th></tr>";
  for (let i = 0; i < data.length; i++) {
    var amt = data[i]["amount"];
    var tag = data[i]["tag"];
    var date = data[i]["date"];
    var stringAmt = "<tr><td>" + amt + "</td>";
    var stringTag = "<td>" + tag + "</td>";
    var stringDate = "<td>" + date + "</td></tr>";
    var stringTotal = stringAmt + stringTag + stringDate;
    divTable.innerHTML += stringTotal;
  }
}

generateTables(data);
