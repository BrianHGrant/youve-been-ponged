$(document).ready(function() {
  $('#userInput').submit(function(event) {
    var inNumberInt = parseInt($('input#inNumber').val());

    alert(inNumberInt);

    event.preventDefault();
  });
});
