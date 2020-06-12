$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault(event);

    const userInput = parseInt($("input#user-input").val());
    processInput(userInput);
  });
});

function processInput(userInput) {
  const numericalArray = [];
  const one = "1";
  const two = "2";
  const three = "3";

  if (userInput === NaN){
    resetPage();
  } else {
      for(i = 0; i <= userInput; i++) {
        numericalArray.push(i);
      }
      let stringArray = numericalArray.map(String);
      if (numericalArray.includes("1")) {
        for (i = 0; i < numericalArray.length; i++) {
          if (one.indexOf(numericalArray[i]) > -1) {
            numericalArray[i] = numericalArray.replace(numericalArray[i],"Beep!");
          }
        }
      } 
  }
}

function resetPage() {
  $("input#user-input").val("");
  alert("Please enter valid numerical input!");
  $("#form-clear").click(function(event) {
    event.preventDefault();
    location.reload(true);
  });
}