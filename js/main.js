jQuery(document).ready(function($) {
	$(".hamburger").on("click", function(){
	    $(this).toggleClass("hamburger__active");
	    $(".menu").toggleClass("menu__active");  
    });
    $(".menu").on("click","a", function () {
	   $(".hamburger").removeClass("hamburger__active");
	   $(".menu").removeClass("menu__active");  
    });	
    $(".menu, .scroll").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
	});
	

	var wrap = $('.menu');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 800) {
		      wrap.addClass('menu__fixed');
		    } else {
		      wrap.removeClass('menu__fixed');
		    }

	});
	
	// var width1 = $("#line__bar-indicator1").text();
 //        $("#line__bar1").width(width1);

 //    var width2 = $("#line__bar-indicator2").text();
 //        $("#line__bar2").width(width2);

 //    var width3 = $("#line__bar-indicator3").text();
 //        $("#line__bar3").width(width3);

 //    var width4 = $("#line__bar-indicator4").text();
 //        $("#line__bar4").width(width4);

 //    var width5 = $("#line__bar-indicator5").text();
 //        $("#line__bar5").width(width5);

 //    var width6 = $("#line__bar-indicator6").text();
 //        $("#line__bar6").width(width6);   

	$('.line__bar-inner').each(function(index, el) {
     var progressBard = $(this).find('.line__bar-indicator').text();
     $(this).width(progressBard);
     if (progressBard === "100%"){
     	$(this).css({'border-radius' : '3px'});
     }
    });  

	
	// var deg1 = $("#label1").text()*1;
	// 	if(deg1 <= 50){
	// 		$("#r-s1").css("display","none");
	// 		deg1 = deg1*3.6;
	// 		$("#l-s1").css({'transform' : 'rotate('+ deg1 +'deg)'});
	// 	}
	// 	else if(50 < deg1 <=100){
	// 		$("#pie1").css("clip","rect(auto, auto, auto, auto)");
	// 		$("#r-s1").css({'transform' : 'rotate(180deg)'});
	// 		deg1 = deg1*3.6;
	// 		$("#l-s1").css({'transform' : 'rotate('+ deg1 +'deg)'});
	// 	}
	// var deg2 = $("#label2").text()*1;
	// 	if(deg2 <= 50){
	// 		$("#r-s2").css("display","none");
	// 		deg2 = deg2*3.6;
	// 		$("#l-s2").css({'transform' : 'rotate('+ deg2 +'deg)'});
	// 	}
	// 	else if(50 < deg2 <=100){
	// 		$("#pie2").css("clip","rect(auto, auto, auto, auto)");
	// 		$("#r-s2").css({'transform' : 'rotate(180deg)'});
	// 		deg2 = deg2*3.6;
	// 		$("#l-s2").css({'transform' : 'rotate('+ deg2 +'deg)'});
	// 	}
	// var deg3 = $("#label3").text()*1;
	// 	if(deg3 <= 50){
	// 		$("#r-s3").css("display","none");
	// 		deg3 = deg3*3.6;
	// 		$("#l-s3").css({'transform' : 'rotate('+ deg3 +'deg)'});
	// 	}
	// 	else if(50 < deg3 <=100){
	// 		$("#pie3").css("clip","rect(auto, auto, auto, auto)");
	// 		$("#r-s3").css({'transform' : 'rotate(180deg)'});
	// 		deg3 = deg3*3.6;
	// 		$("#l-s3").css({'transform' : 'rotate('+ deg3 +'deg)'});
	// 	}
	// var deg4 = $("#label4").text()*1;
	// 	if(deg4 <= 50){
	// 		$("#r-s4").css("display","none");
	// 		deg4 = deg4*3.6;
	// 		$("#l-s4").css({'transform' : 'rotate('+ deg4 +'deg)'});
	// 	}
	// 	else if(50 < deg4 <=100){
	// 		$("#pie4").css("clip","rect(auto, auto, auto, auto)");
	// 		$("#r-s4").css({'transform' : 'rotate(180deg)'});
	// 		deg4 = deg4*3.6;
	// 		$("#l-s4").css({'transform' : 'rotate('+ deg4 +'deg)'});
	// 	}	
	// var deg5 = $("#label5").text()*1;
	// 	if(deg5 <= 50){
	// 		$("#r-s5").css("display","none");
	// 		deg5 = deg5*3.6;
	// 		$("#l-s5").css({'transform' : 'rotate('+ deg5 +'deg)'});
	// 	}
	// 	else if(50 < deg5 <=100){
	// 		$("#pie5").css("clip","rect(auto, auto, auto, auto)");
	// 		$("#r-s5").css({'transform' : 'rotate(180deg)'});
	// 		deg5 = deg5*3.6;
	// 		$("#l-s5").css({'transform' : 'rotate('+ deg5 +'deg)'});
	// 	}
	// var deg6 = $("#label6").text()*1;
	// 	if(deg6 <= 60){
	// 		$("#r-s6").css("display","none");
	// 		deg6 = deg6*3.6;
	// 		$("#l-s6").css({'transform' : 'rotate('+ deg6 +'deg)'});
	// 	}
	// 	else if(60 < deg6 <=100){
	// 		$("#pie6").css("clip","rect(auto, auto, auto, auto)");
	// 		$("#r-s6").css({'transform' : 'rotate(180deg)'});
	// 		deg6 = deg6*3.6;
	// 		$("#l-s6").css({'transform' : 'rotate('+ deg6 +'deg)'});
	// 	}

	$('.pie-wrapper').each(function(index, el) {
     var deg = parseInt($(this).find('span.label').text());
     if (deg <= 50) {
      deg = deg * 3.6;
      $(this).find('.pie .right-side').css('display','none');
      $(this).find('.pie .left-side').css({'transform' : 'rotate(' + deg + 'deg)'}); 
     } else {
      deg = deg * 3.6;
      $(this).find('.pie').css("clip","rect(auto, auto, auto, auto)");
      $(this).find('.pie .right-side').css({'transform' : 'rotate(180deg)'});
      $(this).find('.pie .left-side').css({'transform' : 'rotate(' + deg + 'deg)'}); 
     }
    });

	

	
}) 


