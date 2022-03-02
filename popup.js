// function elementsAttributeChanger(elementTag, property, values) {
//   const elements = document.getElementsByTagName(elementTag);
//   if (elements.length === 0) return;

//   for (let i = 0; i < elements.length; i++) {
//     const randomValue = Math.floor(Math.random() * values.length);
//     elements[i][property] = values[randomValue];
//   }
// }

// function main() {


//   document.getElementById("change_button").addEventListener("click", function() {
//     console.log("HOLA");
//   });
// }

let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  function elementsAttributeChanger(elementTag, property, values) {
    const elements = document.getElementsByTagName(elementTag);
    if (elements.length === 0) return;
  
    for (let i = 0; i < elements.length; i++) {
      const randomValue = Math.floor(Math.random() * values.length);
      elements[i][property] = values[randomValue];
    }
  }
  chrome.storage.sync.get("shrekImages", ({ shrekImages }) => {
    elementsAttributeChanger('img', 'src', shrekImages);
  });
}