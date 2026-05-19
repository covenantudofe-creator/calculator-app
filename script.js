const display = document.getElementById("display");

// Add values to screen
function appendValue(value){
  display.value += value;
}

// Clear screen
function clearDisplay(){
  display.value = "";
}

// Calculate result
function calculateResult(){
  try{
    display.value = eval(display.value);
  }
  catch{
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function(event){

  const key = event.key;

  // Numbers and operators
  if(
    "0123456789+-*/.".includes(key)
  ){
    appendValue(key);
  }

  // Enter key
  else if(key === "Enter"){
    calculateResult();
  }

  // Backspace key
  else if(key === "Backspace"){
    display.value = display.value.slice(0, -1);
  }

  // Escape key
  else if(key === "Escape"){
    clearDisplay();
  }
});