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

// POPULATE RESULT ARRAY FUNCTION
var pingPong = function(number) {
  var pingPongArray = [];
  pingCounter = 0;
  pongCounter = 0;
  pingPongCounter = 0;
  for (i=1; i<=number; i++) {
    if ((i % 3 != 0) && (i % 5 != 0)) {
      pingPongArray.push(i);
    }
    else if ((i % 3 === 0) && (i % 5 != 0)) {
      pingPongArray.push("ping");
      pingCounter ++;
    }
    else if ((i % 3 != 0) && (i % 5 === 0)) {
      pingPongArray.push("pong");
      pongCounter ++;
    }
    else if ((i % 3 === 0) && (i % 5 === 0)) {
      pingPongArray.push("pingpong");
      pingPongCounter ++;
    }
  };
  return pingPongArray;
};

var pingPongGame = function(pings, pingsGuess, pongs, pongsGuess, pingPongs, pingPongsGuess) {
  var wins = 0;
  ifWonStatus = "";
  if (pingsGuess === pings) {
    wins ++;
  };
  if (pongsGuess === pongs) {
    wins++;
  };
  if (pingPongsGuess === pingPongs) {
    wins++;
  };
  if (wins >= 2) {
    ifWonStatus = "winner!"
  } else {
    ifWonStatus = "loser!"
  };
};

// USER INTERFACE
$(document).ready(function() {
  $('#userInput').submit(function(event) {
    $('#resultList ul').html("");
    var inNumberInt = parseInt($('input#inNumber').val());
    var inName = $('input#inName').val();
    var pingGuess = parseInt($('input#inPing').val());
    var pongGuess = parseInt($('input#inPong').val());
    var pingPongGuess = parseInt($('input#inPingPong').val());
    var htmlOutput = "";

    var results = pingedPonged(inNumberInt);
    results.map(function(result) {
      $('#resultList ul').append('<li>'+result+'</li>');
      event.preventDefault();
    });
    $('#instructions').addClass('hide');
    $('#resultList').removeClass('hide');
    var winner = pingPongGame(pingCounter, pingGuess, pongCounter, pongGuess, pingPongCounter, pingPongGuess);
    alert(winner);
    $('#winnerStatus').removeClass('hide');
    $('.playerName').text(inName);
    $('.ifWon').text(ifWonStatus);
    event.preventDefault();
  });

});
