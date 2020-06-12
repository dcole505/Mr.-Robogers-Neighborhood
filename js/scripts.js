$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault(event);

    const userInput = $("input#user-input").val();
    processInput(userInput);
  });
});

function processInput(userInput) {
  const separatedInput = userInput.split("");
  let convertedArray = separatedInput.map(Number);

  if(convertedArray.includes(NaN)){
    $("#form-clear").click(function() {
      location.reload(true);
      alert("Please enter valid numerical input!")
    });
  } else {
      if(convertedArray.includes(1)) {
        for (let element of convertedArray) {
          convertedArray = "Beep!";
          console.log(convertedArray);
        }
      } else if(convertedArray.includes(2)) {
          for (let element of convertedArray) {
            convertedArray = "Boop";
            console.log(convertedArray);
          } 
        }  else if(convertedArray.includes(3)) {
            for (let element of convertedArray) {
              convertedArray = "Won't you be my neighbor?";
              console.log(convertedArray);
            } 
          }
  }
}