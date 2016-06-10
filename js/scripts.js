var validPositiveNumber = function(number) {
  if (!number || number <= 0) {
    return false;
  } else {
    return true;
  };
};



$(document).ready(function() {
  $('#userInput').submit(function(event) {
    var inNumberInt = parseInt($('input#inNumber').val());

    var isValid = validPositiveNumber(inNumberInt);
    if (isValid === false) {
      alert("Input is not valid. Please enter a postive integer.");
    }
    else {
      alert("Valid positive integer!");
    };
    alert(inNumberInt);

    event.preventDefault();
  });
});
