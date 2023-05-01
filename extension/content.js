// content.js

// Get all the elements on the page
let elements = document.getElementsByTagName("*");

// Iterate through the elements and modify their text
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];

  // Only modify elements with text content
  if (element.innerText.length > 0) {
    let text = element.innerText;

    // Modify the text
    text = text.toUpperCase();

    // Write the modified text back to the element
    element.innerText = text;
  }
}

