var tabledata = data;

var tbody = d3.select("tbody");

// Console.log data
console.log(tabledata);
//function build table 
function build_table (data){
  tbody.html("");
  data.forEach((sightings) => {
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}

//event handler for function form
function runEnter() {

  
  d3.event.preventDefault();
  
 
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tabledata;
  if (inputValue){
    filteredData = filteredData.filter(date => date.datetime === inputValue);
  }
  build_table(filteredData);
  console.log(filteredData);
}

  // Button
var button = d3.select("#filter-btn");

  // select form
var form = d3.select("#form");
  // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
console.log(runEnter);
build_table(tabledata);