$(document).ready(function(){
    var flag=1;
    
    $(".btn").click(function(){
        if(flag==1){
            $(".content").css({overflow : "scroll"});
            $(".btn").text("CLOSE");
            $(".laptop").css({transform:"translate(-50%,-50%) scale(2)",display :"none"});
            $(".box").css({height:"100vh",width:"100%",position : "fixed"});
            $(".blackbox").css({left:"0%"});
            $(".imagebox").css({left:"100%"});
            $(".content").animate({left:"0%"},1000);
           
            flag=0;
        } 
        else{
            $(".content").css({overflow : "scroll"});
            $(".btn").text("EXPLORE MORE");
            $(".laptop").css({transform:"translate(-50%,-50%) scale(1)",display :"block"});
            $(".box").css({height:"210px",width:"325px", position : "absolute"});
            $(".blackbox").css({left:"0%"});
            setTimeout(imgbox,200);         // i want image box after some dealy
            function imgbox(){
                $(".imagebox").css({left:"0%"});
            }
            $(".content").animate({left:"-100%"},1000);
         
            flag=1;
        }
    });
});








