//User Interface Logic
$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault(event);
    $("#display-result").hide();

    const userInput = $("input#user-input").val();
    const displayArray = processInput(userInput);
    display(displayArray);
  });
});

//Business Logic
function processInput(userInput) {
  const numericalArray = [];
  let stringArray = [];

  for(i = 0; i <= userInput; i++) {
    numericalArray.push(i);
  }
  stringArray = numericalArray.map(String);
    for (i = 0; i < stringArray.length; i++) {
      if ((stringArray[i].indexOf("1") > -1) && (!(stringArray[i].includes("2"))) && (!(stringArray[i].includes("3")))) {
        stringArray[i] = stringArray[i].replace(stringArray[i],"Beep!");
      } else if ((stringArray[i].indexOf("2") > -1) && (!(stringArray[i].includes("3")))) {
        stringArray[i] = stringArray[i].replace(stringArray[i],"Boop");
        } else if (stringArray[i].indexOf("3") > -1) {
          stringArray[i] = stringArray[i].replace(stringArray[i],"Won't you be my neighbor?");
          }
    }
  return stringArray;
}

function display(displayArray) {
  $(".rogers-output").text(displayArray);
  $("#display-result").show();
  $("#reset-button").click(function() {
    $("#display-result").hide();
  });
}

