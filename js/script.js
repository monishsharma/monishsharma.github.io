$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
 
    var winTop = $(window).scrollTop();
 
    if (pos < winTop + 500) {
      $(this).addClass("slide");

    }
  });
});

/* Animation */

$(document).ready(function(){
	// $("#box1 .colorLayer").animate({left:"0px"},500);
	// $("#box1 .colorLayer").delay(400).animate({left:"-850px"},500);
	// $("#box1 .title").delay(400).animate({left:"0px"},500);

	// $("#box2 .colorLayer").delay(300).animate({left:"0%"},800);
	// $("#box2 .colorLayer").delay(400).animate({left:"-50%"},800);
  // $("#box2 .title").delay(800).animate({left:"0%"},800);	
  
  // $("#box3 .colorLayer2").delay(1000).animate({right:"0%"},1000);
	// $("#box3 .colorLayer2").delay(800).animate({right:"-50%"},1000);
  // $("#box3 .title2").delay(800).animate({right:"0%"},1000);	
});

$(document).ready(function(){
  $('#mybtn').on('click',function(){
      $('.menu').css({width : "100%"});

  });
  
 
});
$(document).ready(function(){
  $('#close').on('click',function(){
      $('.menu').css({width : "0%"});

  });

  $(document).ready(function() {
	
    setTimeout(function(){
      $('.sabkuch').fadeIn(1000).css({display : "block"});
      $('#load').css({display : "none"});
    }, 3000);
  });
 
});



$('.btn1').on('click',function(){
  window.location.href ="op5/index.html";
})







// $(document).ready(function(){

//   Window.onscroll = function() {myfunction()};
//   var navbar = document.getElementById("myNavbar");
//   var sticky = navbar.offsetTop;
//   function myFunction() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
