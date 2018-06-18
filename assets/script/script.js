// Pop-Up age

$(document).ready(function(){
  var result = false;
  var age = "";
  function test() {
    var name = prompt("Indiquez votre âge : ");
    var entree = parseInt (name, 10);
    result = Number.isInteger(entree)
    age = entree;
  }

  while(result == false) {
    test();
  }
  if (age < 18) {
    window.location.href = 'https://www.imdb.com/';
  }
  $("#cookie-button").on("click", function() {
    $("#cookies").hide();
  });
  
  $("#loginButton").click(function(){
    console.log("test");
    $("#popup-login").show();
  });
});
