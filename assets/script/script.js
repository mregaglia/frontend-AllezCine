// Pop-Up age

function link(position){
  var $target = $('html,body');
  $target.animate({scrollTop: position}, 500);
};

$(document).ready(function(){
  // var result = false;
  // var age = "";
  // function testnumber() {
  //   let name = prompt("Indiquez votre âge : ");
  //   let entree = parseInt(name, 10);
  //   result = Number.isInteger(entree)
  //   age = entree;
  // }
  //
  // while(result == false) {
  //   testnumber();
  // }
  // if (age < 18) {
  //   window.location.href = 'https://www.imdb.com/';
  // }

  //modal login and register code

  let toggle = (select) => {
    $(select).modal("toggle");
  }

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

  //button to home code

  let newButton = () =>{
    let homeButton = document.createElement("button");
    let newText = document.createElement("i");
    newText.setAttribute("class", "far fa-arrow-alt-circle-up upbutton")
    homeButton.appendChild(newText);
    // homeButton.setAttribute("id", "link");
    let currentFooter = document.getElementById('footer');
    homeButton.setAttribute("onclick", "link(0)");
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

  //alert from contact form code

  $("#contactForm").submit(function(e){
    e.preventDefault();
    alert($("#email2").val() + '\n' + $("#message").val())
  });

  //stop youtube video from playing in hidden modal

  $(".script1").on('hidden.bs.modal', function (e) {
    $(".script1 iframe").attr("src", $(".script1 iframe").attr("src"));
  });

  //randomize Json function

  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  function show(data) {
    let img = data[i].url;
    let year = data[i].date;
    let title = data[i].name;
    let y = data.indexOf(data[i]);
    let entry = '<div class="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"><img class="card-img-top" src=' + img + '><div class="card-footer"><div class="text-center txt1">' + title + '</div><br><div class=txt1>' + year + '</div></div></div>';
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
    $(".wrapperJson").empty();
    $(".wrapperJson2").empty();
    $(".wrapperJson3").empty();
  }

  function movies(json) {
    clear();
    $.getJSON(json, function(data){
      for(i in data) {
        show(data);
      }
    });
  }

  function all() {
    clear();
    $.getJSON("./assets/script/movies.json", function(data){
      let test = Shuffle(data);
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

  // show more or less movies on featured section

  var position2 = 0;

  $("#theshowmust").click(function(){
    let hideshow = $(".hiddenRow").css("display");
    $(".showmore, .showless").toggle(function(){
      if(hideshow == "none") {
        $('.hiddenRow').css("display", "flex");
        position2 = $(window).scrollTop();
      } else {
        $('.hiddenRow').css("display", "none");
        link(position2);
      }
    });
  });

  //show movies in shop section

  function shop(num1, num2) {
    $.getJSON('./assets/script/movies.json', function(data){
      for(i = num1; i <= num2; i++){
        let img = data[i].url;
        let title = data[i].name;
        let year = data[i].date;
        let price = data[i].price;
        let id = 'movieID' + i
        let entry = '<div class="col-12 col-md-6 col-lg-3"><div class="card imgclick" id=' + id + '><img class="card-img-top imgclick2" src=' + img + ' alt=' + title + '><div class="card-footer"><div class="text-center txt1">' + title + '</div><br><div class="row"><div class="col txt1">' + year + '</div><div class="col txt1 prix">' + price + '</div></div></div></div></div>';
        if(i % 2 === 0){
          $(entry).appendTo($('.wrapperShop1'));
        } else {
          $(entry).appendTo($('.wrapperShop2'));
        }
      }
    });
  }

  //show more or less movies on shop section

  shop(0, 7);
  let x = 0;
  let y = 7;
  $('#shopForward').click(function(){
    $(".wrapperShop1").empty();
    $(".wrapperShop2").empty();
    x += 8;
    y += 8;
    if(x<32){
      shop(x, y);
      $('#shopBack').removeAttr("disabled");
    } else {
      shop(32, 39);
      $(this).attr("disabled", "true");
    }
  });

  $('#shopBack').click(function(){
    $(".wrapperShop1").empty();
    $(".wrapperShop2").empty();
    x -= 8;
    y -= 8;
    if(x <= 0) {
      $(this).attr("disabled", "true");
      shop(0, 7);
    } else {
      shop(x, y);
      $('#shopForward').removeAttr("disabled");
    }
  });

  //get trailer for card in shop section

  $(document).on("click", ".imgclick", function(){
    let source = $(this).attr("id");
    let index2 = Number(source.slice(7));
    $.getJSON('./assets/script/movies.json', function(data){
      let trailer = data[index2].trailer;
      $('#embed1').attr('src', trailer);
      $('#embed2').html(data[index2].name);
      $('#embed3').html(data[index2].storyline);
      $('#embed4').html(data[index2].date);
      $('#embed5').html(data[index2].genre);
      $('#embed6').html(data[index2].price);
    });
  });

});
