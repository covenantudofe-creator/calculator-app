const display = document.getElementById("display");

// ENV VARIABLES
console.log(`Running ${CONFIG.APP_NAME} v${CONFIG.VERSION}`);

// Add values to screen
function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

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

  if("0123456789+-*/.".includes(key)){
    appendValue(key);
  }
  else if(key === "Enter"){
    calculateResult();
  }
  else if(key === "Backspace"){
    display.value = display.value.slice(0, -1);
  }
  else if(key === "Escape"){
    clearDisplay();
  }
});