$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault(event);
    $("#display-result").hide();

    const userInput = parseInt($("input#user-input").val());
    const displayArray = processInput(userInput);
    display(displayArray);
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
}

function resetPage() {
  $("input#user-input").val("");
  alert("Please enter valid numerical input!");
  $("#form-clear").click(function(event) {
    event.preventDefault();
    location.reload(true);
  });
}

function display(displayArray) {
  $(".rogers-output").text(displayArray);
  $("#display-result").show();
}