(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    // $("header").addClass("background-header");
	  } else {
	    // $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          	itemSelector: ".all",
          	percentPosition: true,
          	masonry: {
            columnWidth: ".all"
        }
    })

	var width = $(window).width();
		$(window).resize(function() {
			if (width > 992 && $(window).width() < 992) {
				location.reload();
			}
			else if (width < 992 && $(window).width() > 992) {
				location.reload();
			}
	})



	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-features').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1200:{
				  items:3
			  },
			  1800:{
				items:3
			}
		}
	})

	$('.owl-collection').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			}
		}
	})

	
	
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});
	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }


	


})(window.jQuery);

/* TODO: Update content here
* Top Download Games
* Popular games */
var topDownloadGames = {
	watersort: {
		name: 'Water Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/nxT9TWLCMCmUxzafx-sKGsktGqGW_XNwhH1Cs50jlGr-fR3mMIoBMeH2bH3VOTfvfLsk=s48-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	}
	,blocksmash: {
		name: 'Block Smash',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/hWJJx3I29IV-DYdfF0AegaRISIf5JOlR01Z4WHEXNQ68DQmkd_a9pfuiKOr7bfFElDI=s48-rw',
		download: '5m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.miracle.block.smash.journey'
	}
	,ballsort: {
		name: 'Color Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/3ZZKUMmh2WY9Vi8G_X4Mxs40fYl8BU9iOdKxYJEbSxu0OPwSsorwP8mpB1brgjbt45oQ=s48-rw',
		download: '5m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.titan.ball.sort.woody.puzzle'
	},
}

var popularGames = {
	watersort: {
		name: 'Water Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/rYOSvM51zSmtcEdEFi2gcQ-BF1KohfPm0Tbww7dVtOV22t8dMlLI7K6t_z1EtonTDhrp=w2560-h1440-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	}
	,blocksmash: {
		name: 'Block Smash',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/HrK5EdxsAO8JQpe1I8eXHHaRNvf-HUmtCa1HwYc2mtio6HFkZiRCvqA1KUD94lDcifBq=w2560-h1440-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	}
	,ballsort: {
		name: 'Color Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/aErioex3JwKz8dfcerNWhr9bLglgJTqVqcj-k7rO8wWLYl95LEnm53aXn7F2Ja5p3gc=w2560-h1440-rw',
		download: '5m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	},
	ballAdventure: {
		name: 'Ball Adventure',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/eZBHElc3HxS2_5KFes3rtFfHqTA90PwWo0UBS1Gxsip7ZmEomFGG72tWN_t9lc-Cijw=w2560-h1440-rw',
		download: '1m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	},
}
/* End: Content */

// Display game list
function displayPopularGames(id, games) {
  for (var prop in games) {
    document.getElementById(id).innerHTML += '<div class="col-lg-3 col-sm-6">\n' +
        '<div class="item">\n' +
        '<img src="' + games[prop].image + '" alt="">\n' +
        '<h4>' + games[prop].name + '<br><span>' + games[prop].genre + '</span></h4>\n' +
        '<ul>\n' +
        '<li><i class="fa fa-star"></i>'+ games[prop].star + '</li>\n' +
        '<li><i class="fa fa-download"></i>' + games[prop].download + '+</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '</div>';
  }
}

displayPopularGames('demo', popularGames)

// Display top download games
function displayTopDownloaded(id, games){
	for (var prop in games) {
		document.getElementById(id).innerHTML += '<li>\n' +
			'<img src="' + games[prop].image + '" alt="" class="templatemo-item">\n' +
			'<h4>' + games[prop].name + '</h4>\n' +
			'<h6>' + games[prop].genre + '</h6>\n' +
			'<span><i class="fa fa-star" style="color: yellow;"></i> 4.5</span>\n' +
			'<span><i class="fa fa-download" style="color: #dc3931;"></i> ' + games[prop].download + '+</span>\n' +
			'<div class="download">\n' +
			'<a href="' + games[prop].link + '"><i class="fa fa-download"></i></a>\n' +
			'</div>\n' +
			'</li>'
	}
}

displayTopDownloaded('top-games', topDownloadGames)