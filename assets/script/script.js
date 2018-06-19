// Pop-Up age

$(document).ready(function(){
  // var result = false;
  // var age = "";
  // function test() {
  //   var name = prompt("Indiquez votre âge : ");
  //   var entree = parseInt (name, 10);
  //   result = Number.isInteger(entree)
  //   age = entree;
  // }
  //
  // while(result == false) {
  //   test();
  // }
  // if (age < 18) {
  //   window.location.href = 'https://www.imdb.com/';
  // }

  let hidding = (select) => {
    $(select).hide();
  }

  let toggle = (select) => {
    $(select).modal("toggle");
  }

  // $("#cookie-button").on("click", function() {
  //   hidding("#cookies");
  // });

  $(".vanish").click(function(){
    toggle("#modaltest");
  });
  $("#loginRegister").click(function(){
    toggle("#modaltest");
    toggle("#modaltest2");
  });
  $("#registerButton").click(function(){
    toggle("#modaltest2");
  });
  $(".vanish2").click(function(){
    toggle("#modaltest2");
  });

  var newButton = () =>{
    var homeButton = document.createElement("a");
    var newText = document.createTextNode("test");
    homeButton.appendChild(newText);
    homeButton.setAttribute("class", "btn btn-primary")
    homeButton.setAttribute("href", "#top")
    var currentFooter = document.getElementById('footer');
    currentFooter.insertAdjacentElement("beforeend", homeButton);
  };

  newButton();
  $("#contactForm").submit(function(e){
    e.preventDefault();
    alert($("#email2").val() + '\n' + $("#message").val());

  $(".script1").on('hidden.bs.modal', function (e) {
    $(".script1 iframe").attr("src", $(".script1 iframe").attr("src"));

  });

});

// Modal
