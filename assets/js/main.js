
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn[0].onclick = function() {
  modal.style.display = "block";
  $('.p1').text("₹35,000");
  $('.p2').text("₹36,000");
  $('.p3').text("₹34,000");
  $('.p4').text("₹34,440");
  $('.Android').text(" Android 8.1  ");
};

btn[1].onclick = function() {
  modal.style.display = "block";
   $('.p1').text("₹70,000");
  $('.p2').text("₹69,770");
  $('.p3').text("₹71,000");
  $('.p4').text("₹70,040");
  $('.p4').text("₹34,440");
  $('.Android').text(" ios 11.1  ");
};

btn[2].onclick = function() {
  modal.style.display = "block";
   $('.p1').text("₹59,000");
  $('.p2').text("₹60,770");
  $('.p3').text("₹61,000");
  $('.p4').text("₹60,040");
   $('.Android').text(" Android 8.1  ");
};
btn[3].onclick = function() {
  modal.style.display = "block";
   $('.p1').text("₹40,000");
  $('.p2').text("₹39,770");
   $('.Android').text(" Android 8.1  ");
  $('.p3').text("₹41,000");
  $('.p4').text("₹40,040");
};
btn[4].onclick = function() {
  modal.style.display = "block";
   $('.p1').text("₹64,000");
    $('.Android').text(" Android 8.1  ");
  $('.p2').text("₹65,770");
  $('.p3').text("₹62,000");
  $('.p4').text("₹60,040");
};
btn[5].onclick = function() {
  modal.style.display = "block";
   $('.p1').text("₹15,000");
    $('.Android').text(" Android 8.1  ");
  $('.p2').text("₹16,770");
  $('.p3').text("₹16,000");
  $('.p4').text("₹16,040");
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//tabs
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
			
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})



$(document).ready(function(){
	$('.overlay-content .btn').click(function(){
		var btn_id = $(this).attr('data-btn');
		 
		$('.overlay-content  button').removeClass('current ');
 
		$('.sec1').removeClass('current');
 		$(this).addClass('current');
		$("#"+btn_id).addClass('current');
		
		
	if(btn_id == "btn3" || btn_id == "btn4" ){
			$('#filter').show();
			
		}
	
		else {
			$('#filter').hide();
		}


 

	});
	$( '.overlay-content .btn' ).on("click", function(){
  	$('#myNav').css({width : "0%"});

});
});

 
 jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});












 
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  $('#myNav').show();
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
 
 //accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}