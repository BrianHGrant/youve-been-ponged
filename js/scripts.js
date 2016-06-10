// BUSINESS LOGIC


// MAIN PROGRAM HANDLER
var pingedPonged = function(number) {
  var isValid = validPositiveNumber(number);
  if (!isValid) {
    var errorMsg = 'Input is not valid. Please enter a postive integer.';
    alert(errorMsg);
  }
  else {
    var pingedArray = pingFunction(number);
    alert(pingedArray);

  };

};

// VALIDATION CHECK FUNCTION
var validPositiveNumber = function(number) {
  if (!number || number <= 0) {
    return false;
  } else {
    return true;
  };
};

// DIVISIBLE BY 3 FUNCTION
var pingFunction = function(number) {
  var pingArray = [];
  for (i=1; i<=number; i++) {
    if (i % 3 != 0) {
      pingArray.push(i);
    }
    else {
      pingArray.push("ping");
    }
  };
  return pingArray;
};





// USER INTERFACE
$(document).ready(function() {
  $('#userInput').submit(function(event) {
    var inNumberInt = parseInt($('input#inNumber').val());
    var result = pingedPonged(inNumberInt);

    event.preventDefault();
  });
});
