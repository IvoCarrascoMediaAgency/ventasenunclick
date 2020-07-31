var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("container").style.top = "0";
  } else {
    document.getElementById("container").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('colormenu1');
      $('.menu').addClass('colormenu2');
     
	
		} else {
			$('header').removeClass('colormenu1');
      $('.menu').removeClass('colormenu2');
     
		}
	});
 
});



$('.menuwbs, .colormenu2,.q').on('click', function(){
  $('#nav').toggleClass('mostrarmenu2');
})

$('#nav').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
})


$('.mostrarmenu2').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
  // $('#nav').removeClass('mostrarmenu2');

})


function moverseA(reservar) {
  location.hash = "#" + reservar;
}


$('.menuwbs, .menumovil2').on('click', function(){ 
  $('.menuwbs').toggleClass('iconnone');
})


$('.eti1 , .eti1b').on('click', function(){
    $('.datos1 , .datos1b').addClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');

  })
  
  $('.eti2 , .eti2b').on('click', function(){
    $('.datos2 , .datos2b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })

  $('.eti3 , .eti3b').on('click', function(){
    $('.datos3 , .datos3b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })

  $('.eti4 , .eti4b').on('click', function(){
    $('.datos4 , .datos4b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })

  $('.eti5 , .eti5b').on('click', function(){
    $('.datos5 , .datos5b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })

  $('.eti6 , .eti6b').on('click', function(){
    $('.datos6 , .datos6b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })

  $('.eti7 , .etib7').on('click', function(){
    $('.datos7 , .datos7b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })

  $('.eti8 , .eti8b').on('click', function(){
    $('.datos8 , .datos8b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    
  })


$('.eti1 , .eti1b').on('click', function(){
    $('.eti1 , .eti1b').addClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  
$('.eti2 , .eti2b').on('click', function(){
    $('.eti2 , .eti2b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  $('.eti3 , .eti3b').on('click', function(){
    $('.eti3 , .eti3b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  $('.eti4 , .eti4b').on('click', function(){
    $('.eti4 , .eti4b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  $('.eti5 , .eti5b').on('click', function(){
    $('.eti5 , .eti5b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  $('.eti6 , .eti6b').on('click', function(){
    $('.eti6 , .eti6b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  $('.eti7 , .eti7b').on('click', function(){
    $('.eti7 , .eti7b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti8 , .eti8b').removeClass('select tripimg');

  })

  $('.eti8 , .eti8b').on('click', function(){
    $('.eti8 , .eti8b').addClass('select tripimg');
    $('.eti1 , .eti1b').removeClass('select tripimg');
    $('.eti2 , .eti2b').removeClass('select tripimg');
    $('.eti3 , .eti3b').removeClass('select tripimg');
    $('.eti4 , .eti4b').removeClass('select tripimg');
    $('.eti5 , .eti5b').removeClass('select tripimg');
  
    $('.eti6 , .eti6b').removeClass('select tripimg');
    $('.eti7 , .eti7b').removeClass('select tripimg');

  })

  

  

//   Whatsapp Chat



$('.cardnegocio').on('click', function(){
    $('#cardmenu').addClass('mostrarcardmenu');
  })
  
  $('#cardmenu').on('click', function(){
    $('#cardmenu').removeClass('mostrarcardmenu');
  })
  
  
  $('.cardmenu').on('click', function(){
    $('#cardmenu').removeClass('mostrarcardmenu');
    // $('#cardmenu').removeClass('cardmenu');
  
  })
  
  // mostrar despues de 2 segundos el mensaje a whatsapp falso
  
  
    setTimeout(function() {
        $(".unowhat").fadeIn(1000);
    },8500);
  

  
$('.num').counterUp({delay:1,time:200});
  


// new slider

//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

// function autoplay() {
// 	interval = setInterval(function(){
// 		moverD();
// 	}, 9000);
// }
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();

// smooth sroll navbar 
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 2000
});

//  contador de clientes




