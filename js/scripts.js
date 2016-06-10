// BUSINESS LOGIC

// VALID POSTIVE NUMBER FUNCTION
var validPositiveNumber = function(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
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

// CALCULATE SCORE FUNCTION
var pingPongGame = function(pings, pingsGuess, pongs, pongsGuess, pingPongs, pingPongsGuess) {
  var wins = 0;
  var ifWonStatus = "";
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
  return ifWonStatus
};

// USER INTERFACE
$(document).ready(function() {
  $('#userInput').submit(function(event) {
    $('.help-block').addClass('hide')
    $('#resultList ul').html("");
    var inNumberInt = parseInt($('input#inNumber').val());
    var inName = $('input#inName').val();
    var pingGuess = parseInt($('input#inPing').val());
    var pongGuess = parseInt($('input#inPong').val());
    var pingPongGuess = parseInt($('input#inPingPong').val());
    // RUNS VALIDATION AND DISPLAYS ERRORS TO USER
    if(!inName) {
      $('#nameHelpBlock').removeClass('hide');
    } else if (!validPositiveNumber(inNumberInt)) {
      $('#numberHelpBlock').removeClass('hide');
    } else if (!validPositiveNumber(pingGuess)) {
      $('#numberHelpBlock1').removeClass('hide');
    } else if (!validPositiveNumber(pongGuess)) {
      $('#numberHelpBlock2').removeClass('hide');
    } else if (!validPositiveNumber(pingPongGuess)) {
      $('#numberHelpBlock3').removeClass('hide');
    } else {
      // INPUTS RESULTING ARRAY INTO ORDERED LIST
      var htmlOutput = "";
      var results = pingPong(inNumberInt);
      results.map(function(result) {
        $('#resultList ul').append('<li>'+result+'</li>');
        event.preventDefault();
      });
      // INSTRUCTIONS/RESULTS SHOW/HIDE BLOCK
      $('#instructions').addClass('hide');
      $('#resultList').removeClass('hide');
      // WINNING STATUS BLOCK
      var winner = pingPongGame(pingCounter, pingGuess, pongCounter, pongGuess, pingPongCounter, pingPongGuess);
      $('#winnerStatus').removeClass('hide');
      $('.playerName').text(inName);
      $('.ifWon').text(winner);
    };
    event.preventDefault();
  });

});
