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

  let hidding = (select) => {
    $(select).hide();
  }

  let showing = (select) => {
    $(select).show();
  }

  $("#cookie-button").on("click", function() {
    hidding("#cookies");
  });

  $("#loginButton").click(function(){
    showing("#popup-login");
  });
  $(".vanish").click(function(){
    hidding("#popup-login");
  });
  $("#loginRegister").click(function(){
    hidding("#popup-login");
    showing("#popup-register");
  });
  $("#registerButton").click(function(){
    showing("#popup-register");
  });
  $(".vanish2").click(function(){
    hidding("#popup-register");
  });
});
