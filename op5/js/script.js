// $('.next').click(function(){

// 	var currentSlide = $('.i1.active1');
// 	var nextSlide = currentSlide.next();
// 	currentSlide.fadeOut(10).removeClass('active1');
// 	nextSlide.fadeIn(10).addClass('active1');

// 	if(nextSlide.length  == 0 ){
// 		$('.i1').first().fadeIn(300).addClass('active1');
// 	}

// });

// $('.prev').click(function(){

// 	var currentSlide = $('.i1.active1');
// 	var prevSlide = currentSlide.prev();
// 	currentSlide.fadeOut(300).removeClass('active1');
// 	prevSlide.fadeIn(300).addClass('active1');


// 	if(prevSlide.length  == 0 ){
// 		$('.i1').last().fadeIn(300).addClass('active1');
// 	}
// });



 var i=0;
 var images=[];
 var time =2000;


 images[0]='image/shoton/a (1).jpg';
 images[1]='image/shoton/a (2).jpg';
 images[2]='image/shoton/a (4).jpg';
 images[3]='image/shoton/a (5).jpg';
 images[4]='image/shoton/a (6).jpg';
 images[5]='image/shoton/a (8).jpg';
     



 function changeImg()
 {
 	 document.slide.src = images[i];

 	 if(i<images.length-1)
 	 {
 	 	i++;
 	 }
 	 else
 	 {
 	 	i=0;
 	 }

 	 setTimeout("changeImg()",time);

 }
 window.onload=changeImg;





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}