$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('bx-x');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('bx-x');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

//Audio

var x = document.getElementById("myAudio"); 
function playSong() {
x.play(); 
}

//Modal
var modal = document.getElementById("myModal_1");
var btn = document.getElementById("myBtn_1");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Disable Context Menu On chrome
window.oncontextmenu = function() { return false; }
