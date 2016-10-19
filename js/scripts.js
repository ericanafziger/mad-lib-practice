$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var nounInput = $("input#noun").val();
    var adjectiveInput = $("input#adjective").val();
    var verbInput = $("input#verb").val();
    var person2Input = $("input#person2").val();

    $(".person1").text(person1Input);
    $(".noun").text(nounInput);
    $(".adjective").text(adjectiveInput);
    $(".verb").text(verbInput);
    $(".person2").text(person2Input);

    $("#story").show();
    event.preventDefault();

  });



});
