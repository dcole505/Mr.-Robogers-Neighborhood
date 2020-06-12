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
    resetPage();
  } else {
      if(convertedArray.includes(1)) {
        for (i = 0; i < convertedArray.length; i++) {
          if(convertedArray[i] === 1){
            convertedArray[i] = "Beep!";
          }
        }
      } else if(convertedArray.includes(2)) {
          for (i = 0; i < convertedArray.length; i++) {
            if(convertedArray[i] === 2){
              convertedArray[i] = "Boop";
            }          } 
        }  else if(convertedArray.includes(3)) {
            for (i = 0; i < convertedArray.length; i++) {
              if(convertedArray[i] === 3) {
                convertedArray[i] = "Won't you be my neighbor?";
              }
            } 
          }
      console.log(convertedArray);
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