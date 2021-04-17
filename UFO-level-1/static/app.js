var tabledata = data;

var tbody = d3.select("tbody");


console.log(data);

//sightings
data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });