$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault(event);

    const userInput = parseInt($("input#user-input").val());
    processInput(userInput);
  });
});

function processInput(userInput) {
  const numericalArray = [];
  let stringArray = [];
  const one = "1";

  if (userInput === NaN){
    resetPage();
  } else {
      for(i = 0; i <= userInput; i++) {
        numericalArray.push(i);
      }
      stringArray = numericalArray.map(String);
      for (i = 0; i < stringArray.length; i++) {
        if (stringArray[i].startsWith("1")) {
          stringArray[i] = stringArray[i].replace(stringArray[i],"Beep!");
        } else if (stringArray[i].startsWith("2")) {
          stringArray[i] = stringArray[i].replace(stringArray[i],"Boop");
          } else if (stringArray[i].startsWith("3")) {
            stringArray[i] = stringArray[i].replace(stringArray[i],"Won't you be my neighbor?");
            }
      }
      console.log(stringArray);
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