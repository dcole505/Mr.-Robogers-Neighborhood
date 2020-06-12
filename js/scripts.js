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

  if(convertedArray.includes(NaN)){
    $("#form-clear").click(function() {
      location.reload(true);
      alert("Please enter valid numerical input!")
    });
    
  }
}