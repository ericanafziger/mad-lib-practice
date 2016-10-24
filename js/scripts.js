$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["person1", "noun", "adjective", "verb", "person2"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
  
    $("#story").show();
    event.preventDefault();

  });



});
