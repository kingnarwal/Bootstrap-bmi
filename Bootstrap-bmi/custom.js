$(document).ready(function() {
    (".controls li").click(function() {
  $(this).siblings().removeClass("selected");
     $(this).addClass("selected"); 




     
	
	});
	
	
	
			
	 
	
	   //Female button
			$(".xbox").hide();   
      $(".xborder-box").click(function() {
		  $(this).replaceWith($(".xbox"));
			$(".xbox").show();
	
    });
 
 
 	   //Feet/inch
	$(".w-box").hide();   
      $(".w-border-box").click(function() {
		  $(this).replaceWith($(".w-box"));
			$(".w-box").show();
	
    });
 
 

       //Centimeters
	$(".c-box").hide();   
      $(".c-border-box").click(function() {
		  $(this).replaceWith($(".c-box"));
			$(".c-box").show();
	
   });
 
	/////////////////////////////////////////////////////////////////
	
	
	
	
	//////////////////////////////////////////////////////////////////
 
       //Adult
	$(".a-box").hide();   
      $(".a-border-box").click(function() {
		  $(this).replaceWith($(".a-box"));
			$(".a-box").show();
	
    });
 
 
 
       //Child
	$(".child-box").hide();   
      $(".child-border-box").click(function() {
		  $(this).replaceWith($(".child-box"));
			$(".child-box").show();
	
    });
	
	    // experiment
	$("#experiment-box").hide();   
      $("#experiment-border-box").click(function() {
		  $(this).replaceWith($("#experiment-box"));
			$("#experiment-box").show();
	  
	
    });
	
/////////////////////////////////////////////////////////////////////////	
	    //hope
	$(".hope-box").hide();   
      $(".hope-border-box").click(function() {
		  $(this).replaceWith($(".hope-box"));
			$(".hope-box").show();
	  
	
    });
	   $(".two-boxies").hide();
	$(".hope").click(function() {
	  $(".hope-boxies").replaceWith($(".two-boxies"));
	     $(".two-boxies").show();
	
	
	});
	
	
 
 
 
 
 //$(document).ready(function() {
//      $(".box").hide();   
//        $(".border-box").click(function() {
//		  $(this).replaceWith($(".box"));
//			$(".box").show();
//		
//		});
//});

 