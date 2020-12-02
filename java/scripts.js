$(document).ready(function() {
    const age = parseInt(prompt("How old are you?"));
  
    if (age >= 21) {
      $('#drinks').show();
    }
  });