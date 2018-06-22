// Pop-Up age

function link(){
  console.log("test");
  var $target = $('html,body');
  $target.animate({scrollTop: 0}, 500);
};

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

  let toggle = (select) => {
    $(select).modal("toggle");
  }

  $("#cookie-button").on("click", function() {
    $("#cookies").hide();
  });

  $(".vanish").click(function(){
    toggle("#modaltest");
  });
  $("#loginRegister").click(function(){
    toggle("#modaltest");
    toggle("#modaltest2");
  });
  $(".vanish2").click(function(){
    toggle("#modaltest2");
  });

  let newButton = () =>{
    let homeButton = document.createElement("button");
    let newText = document.createElement("i");
    newText.setAttribute("class", "far fa-arrow-alt-circle-up upbutton")
    homeButton.appendChild(newText);
    // homeButton.setAttribute("id", "link");
    let currentFooter = document.getElementById('footer');
    homeButton.setAttribute("onclick", "link()");
    currentFooter.insertAdjacentElement("beforeend", homeButton);
    $(window).on("scroll", function(){
      sT = $(this).scrollTop();
      if (sT > 536) {
        homeButton.setAttribute("class", "btn btn-link fixed-bottom rounded-circle upstyle ")
      } else {
        homeButton.setAttribute("class", "btn btn-link rounded-circle upstyle")
      }
    });
  };

  newButton();

  $("#contactForm").submit(function(e){
    e.preventDefault();
    alert($("#email2").val() + '\n' + $("#message").val())
  });

  $(".script1").on('hidden.bs.modal', function (e) {
    $(".script1 iframe").attr("src", $(".script1 iframe").attr("src"));
  });

  function show(data) {
    let img = data[i].url;
    let year = data[i].date;
    let title = data[i].name;
    let y = data.indexOf(data[i]);
    // let entry = '<div class="col-xl-2 col-md-4 col-sm-6 col-12"><img src=' + img + '></div>'
    let entry = '<div class="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"><img class="card-img-top" src=' + img + '><div class="card-footer"><div class="text-center">' + title + '</div><br>' + year + '</div></div>';
    if(y > 11) {
      $(entry).appendTo($('.wrapperJson3'));
    }
    else if(y > 5) {
      $(entry).appendTo($('.wrapperJson2'));
    } else {
      $(entry).appendTo($('.wrapperJson'));
    }
  }

  function clear() {
    $(".wrapperJson").html("");
    $(".wrapperJson2").html("");
    $(".wrapperJson3").html("");
  }

  function movies(json) {
    clear();
    $.getJSON(json, function(data){
      for(i in data) {
        show(data);
      }
    });
  }

  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  function all() {
    $.getJSON("./assets/script/movies.json", function(data){
      let test = Shuffle(data);
      clear();
      for(i in data) {
        show(data);
      }
    });
  }

  all();

  $("#actionButton").click(function(){
    movies("./assets/script/action.json");
  });

  $("#animationButton").click(function(){
    movies("./assets/script/animation.json");
  });

  $("#allButton").click(function(){
    all();
  });

  $("#theshowmust").click(function(){
    let hideshow = $(".hiddenRow").css("display");
    $(".showmore, .showless").toggle(function(){
      if(hideshow == "none") {
        $('.hiddenRow').css("display", "flex");
      } else {
        $('.hiddenRow').css("display", "none");
      }
    });
  });

  function shop(num1, num2) {
    $.getJSON('./assets/script/movies.json', function(data){
      for(i = num1; i <= num2; i++){
        let img = data[i].url;
        let title = data[i].name;
        let year = data[i].date;
        let price = "price";
        let entry = '<div class="col-lg-3"><div class="card"><img class="card-img-top" src=' + img + ' alt=' + title + '><div class="card-footer"><div class="text-center">' + title + '</div><div class="row"><div class="col">' + year + '</div><div class="col">' + price + '</div></div></div></div></div>';
        if(i % 2 === 0){
          $(entry).appendTo($('.wrapperShop1'));
        } else {
          $(entry).appendTo($('.wrapperShop2'));
        }
      }
    });
  }
  shop(0, 7);
});
