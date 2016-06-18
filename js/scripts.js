// BUSINESS LOGIC

// VALID NUMBER FUNCTION

var validNumber = function(number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  };
};

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
  wins = 0;
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
    return true;
  } else {
    ifWonStatus = "loser!"
    return false;
  };
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
    } else if (!validNumber(pingGuess)) {
      $('#numberHelpBlock1').removeClass('hide');
    } else if (!validNumber(pongGuess)) {
      $('#numberHelpBlock2').removeClass('hide');
    } else if (!validNumber(pingPongGuess)) {
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
      $('.ifWon').text(ifWonStatus);
      if (winner) {
        $('#winnerStatus').removeClass('loser');
        $('#winnerStatus').addClass('winner');
        $('#losingPic').addClass('hide');
        $('#winningPic').removeClass('hide');
      } else if (!winner) {
        $('#winnerStatus').removeClass('winner');
        $('#winnerStatus').addClass('loser');
        $('#winningPic').addClass('hide');
        $('#losingPic').removeClass('hide');
      };$("#pings-stats").text(pingCounter);
      $("#pongs-stats").text(pongCounter);
      $("#pingpongs-stats").text(pingPongCounter);
      $("#won-stats").text(wins);
      $('#instructionsButton').click(function(event) {
        $('#instructions').removeClass('hide');
        $('#resultList').addClass('hide');
      });
    };
    event.preventDefault();
  });

});
