//Over 21
$(document).ready(function() {   //tells java to run at the same time as the HTML w/o having to wait for everything to load
    const over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");
  
    if (over21) {
      $('#drinks').show();
    } else {
      $('#under-21').show();
    }
  });

//Insurance 
$(document).ready(function() {
    $("form#insurance").submit(function(event) {
      const age = parseInt($("input#age").val());   // Asks for age of person
      const gender = $("select#gender").val();      //Asksfor gender of person
  
      if (age) {
        let quote = (100 - age) * 3;
        if (gender === 'male' && age < 26) {        //Finds the fit of specific demographic (male and under 26)
          quote += 50;
        }
  
        $("#rate").text(quote);
        $("#quote").show();
      } else {
        alert('Please enter your age.');            //Alert if an age is not added to the equation --> If this is not here the non-respone would be treated as a "0"
      }
  
      event.preventDefault();
    });
  });

  // CALCULATOR
  $(document).ready(function() {
    $("form#calculator").submit(function() {
      event.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      let result;
      if (operator === "add") {
        result = add(number1, number2);
      } else if (operator === "subtract") {
        result = subtract(number1, number2);
      } else if (operator === "multiply") {
        result = multiply(number1, number2);
      } else if (operator === "divide") {
        result = divide(number1, number2);
      }
      $("#output").text(result);
    });
  });