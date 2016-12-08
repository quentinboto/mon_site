// Hamburger menu
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});

// Navbar fixed
$(document).ready(function(){
			   $(window).bind('scroll', function() {
			   var navHeight = $( window ).height() - 50;
					 if ($(window).scrollTop() > navHeight) {
						 $('nav').addClass('fixed');
					 }
					 else {
						 $('nav').removeClass('fixed');
					 }
				});
			});

// Close Navbar on click
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});

// Smooth scroll
	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});

    // $(function() {
    //     // Sections height
    //     $(window).resize(function() {
    //         var sH = $(window).height();
    //         $('.accueil').css('height', sH + 'px');
    //     });        
    // });