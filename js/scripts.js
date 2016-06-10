// BUSINESS LOGIC

// MAIN PROGRAM HANDLER
var pingedPonged = function(number) {
  var isValid = validPositiveNumber(number);
  if (!isValid) {
    var errorMsg = 'Input is not valid. Please enter a postive integer.';
    var pingedPongedArray =[];
    pingedPongedArray.push(errorMsg);
    return pingedPongedArray;
  }
  else {
    var pingedPongedArray = pingPong(number);
    return pingedPongedArray;
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
var pingPong = function(number) {
  var pingArray = [];
  for (i=1; i<=number; i++) {
    if ((i % 3 != 0) && (i % 5 != 0)) {
      pingArray.push(i);
    }
    else if ((i % 3 === 0) && (i % 5 != 0)) {
      pingArray.push("ping");
    }
    else if ((i % 3 != 0) && (i % 5 === 0)) {
      pingArray.push("pong");
    }
    else if ((i % 3 === 0) && (i % 5 === 0)) {
      pingArray.push("pingpong");
    }
  };
  return pingArray;
};

// USER INTERFACE
$(document).ready(function() {
  $('#userInput').submit(function(event) {
    $('#resultList ul').html("");
    var inNumberInt = parseInt($('input#inNumber').val());
    var results = pingedPonged(inNumberInt);
    var htmlOutput = "";
    results.map(function(result) {
      $('#resultList ul').append('<li>'+result+'</li>');
    });
    event.preventDefault();
  });

});
