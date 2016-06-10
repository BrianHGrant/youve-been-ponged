// BUSINESS LOGIC

// MAIN PROGRAM HANDLER
var pingedPonged = function(number) {
  var isValid = validPositiveNumber(number);
  if (!isValid) {
    var errorMsg = 'Input is not valid. Please enter a postive integer.';
    return errorMsg;
  }
  else {
    var pingedPongedArray = pingPong(pingFunction(number), pongFunction(number));
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

// DIVISIBLE BY 5 FUNCTION
var pongFunction = function(number) {
  var pongArray = [];
  for (i=1; i<=number; i++) {
    if (i % 5 != 0) {
      pongArray.push(i);
    }
    else {
      pongArray.push("pong");
    }
  };
  return pongArray;
};

// MERGE 2 ARRAYS FUNCTION
var pingPong = function(inArray1, inArray2) {
  var finalArray = [];
  for (i=0; i<inArray1.length; i++) {
    if (inArray1[i]===inArray2[i]) {
      finalArray.push(inArray1[i]);
    } else if (parseInt(inArray1[i].toString())) {
      finalArray.push(inArray2[i]);
    } else if (parseInt(inArray2[i].toString())) {
      finalArray.push(inArray1[i]);
    } else {
      finalArray.push(inArray1[i] + inArray2[i]);
    };
  };
  return finalArray;
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
