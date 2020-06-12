$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault(event);

    const userInput = $("input#user-input").val();
    processInput(userInput);
  });
});

function processInput(userInput) {
  const separatedInput = userInput.split("");
  const convertedArray = separatedInput.map(Number);
  console.log(separatedInput);

  while(convertedArray.includes(NaN)){
    alert("Please enter a valid numerical input!");
  }
}