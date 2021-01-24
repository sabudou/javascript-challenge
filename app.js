// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Use D3 to select the table body
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    
    // Append one table row per UFO
    var row = tbody.append("tr");
    
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button on the page with the id property set to `click-me`
// We can use the `on` function in d3 to attach an event to the handler function
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // Print value
    console.log(inputValue);
    
    // Get the value property of the input element
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    // console.log filter values
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    console.log(selections);
    
    // Append one table row `tr` for each UFO
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);     
        var cell = row.append("td");
        cell.text(value);
    });
});
});
