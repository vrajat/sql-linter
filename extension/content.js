// content.js

// Get the input and output elements
let inputElement = document.getElementById("json-input");
let outputElement = document.getElementById("output");

// Get the pretty print button and add a click event listener
let prettyPrintButton = document.getElementById("pretty-print-button");
prettyPrintButton.addEventListener("click", function() {
  // Get the JSON input from the text box
  let jsonString = inputElement.value;

  // Parse the JSON
  let jsonObject = JSON.parse(jsonString);

  // Pretty print the JSON
  let prettyJsonString = JSON.stringify(jsonObject, null, 2);

  // Write the pretty printed JSON to the output element
  outputElement.innerText = prettyJsonString;
});

