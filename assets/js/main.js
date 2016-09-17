(function ($) {
	"use strict";

	$(document).ready(function () {



		//Search Trigger Activated
		$('.switch-1').on('click', function () {
			$('.search-form-1').toggleClass('show-form');
		});

		$('.switch-2').on('click', function () {
			$('.search-form-2').toggleClass('show-form');
		});

		$('.search-switch-3').on('click', function () {
			$('.search-form-3').toggleClass('show-form');
		});

		$('.search-switch-4').on('click', function () {
			$('.search-form-4').toggleClass('show-form');
		});

		$('.search-switch-5').on('click', function () {
			$('.search-form-5').toggleClass('show-form');
		});

		$('.search-switch-6').on('click', function () {
			$('.search-form-6').toggleClass('show-form');
		});


		// BarFiller Activated
		if ($.fn.barfiller) {
			$('#bar1').barfiller();
			$('#bar2').barfiller();
			$('#bar3').barfiller();
			$('#bar4').barfiller();
			$('#bar5').barfiller();
		}


		//Slick Slide Activated
		if ($.fn.slick) {

			$('.testimonial-active').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				asNavFor: '.client-images',
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
			});

			$('.testimonial-active-ten').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			});

			$('.testimonial-active-two').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			});

			$('.testimonial-active-three').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
                }
              ]
			});

			$('.testimonial-active-four').slick({
				slidesToShow: 3,
				slidesToScroll: 2,
				arrows: false,
				infinite: true,
				dots: true,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
                },
					{
						breakpoint: 590,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
                }
              ]
			});

			$('.testimonial-active-five').slick({
				slidesToShow: 3,
				slidesToScroll: 2,
				arrows: true,
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
                },
					{
						breakpoint: 590,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
                }
            ]
			});


			$('.client-reviews').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true,
				asNavFor: '.client-images',
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
			});

			$('.client-images').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.client-reviews',
				centerMode: true,
				variableWidth: true,
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
		                },
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
		                }
		            ]
			});

			$('.serviceDetailSlide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.ServiceExcerptSlide',
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>'
			});

			$('.ServiceExcerptSlide').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.serviceDetailSlide',
				centerMode: true,
				arrows: true,
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
				variableWidth: true,
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
		                },
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
		                }
		            ]
			});

			$('.InnermemberSlide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.memberThumbnailSlide'
			});

			$('.memberThumbnailSlide').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
				asNavFor: '.InnermemberSlide',
				centerMode: true,
				variableWidth: true,
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
		                },
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
		                }
		            ]
			});

			$('.InnermemberSlideTwo').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.memberThumbnailSlideTwo'
			});

			$('.memberThumbnailSlideTwo').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
				asNavFor: '.InnermemberSlideTwo',
				centerMode: true,
				variableWidth: true,
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
  		                },
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
  		                }
  		            ]
			});

			$('.client-images-slide').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.client-reviews-slide-two',
				variableWidth: true,
				focusOnSelect: true,
				infinite: false,
			});

			$('.client-reviews-slide-two').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.client-images-slide',
				prevArrow: '<div class="btn-slick-prev"><i class="fa fa-angle-left"></i></div>',
				nextArrow: '<div class="btn-slick-next"><i class="fa fa-angle-right"></i></div>',
			});


		}


		//Owl Carousel Activated
		if ($.fn.owlCarousel) {
			$('.member-active-two').owlCarousel({
				items: 1,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				smartSpeed: 900,
				responsive: {
					768: {
						nav: false
					},
					769: {
						nav: true
					}
				}
			});

			$('.member-slide-active').owlCarousel({
				items: 3,
				margin: 30,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				smartSpeed: 900,
				responsive: {
					320: {
						items: 1,
						nav: false
					},
					480: {
						items: 2
					},
					768: {
						items: 3
					}
				}
			});

			$('.member-active-three').owlCarousel({
				items: 2,
				margin: 30,
				responsive: {
					320: {
						items: 1
					},
					1200: {
						items: 2
					}
				}
			});

			$('.member-active-four').owlCarousel({
				items: 3,
				margin: 130,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive: {
					320: {
						items: 1,
						nav: false
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					}
				}
			});

			$('.member-active-9').owlCarousel({
				items: 4,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive: {
					320: {
						items: 1,
						nav: false
					},
					768: {
						items: 2
					},
					992: {
						items: 3
					}
				}
			});

			$('.member-active-10').owlCarousel({
				items: 1,
				smartSpeed: 1000
			});

			$('.blog-active-one').owlCarousel({
				items: 3,
				margin: 30,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive: {
					993: {
						nav: true
					},
					992: {
						items: 3,
						nav: false
					},
					768: {
						items: 2,
						nav: false
					},
					320: {
						items: 1,
						nav: false,
						margin: 0
					}
				}
			});

			$('.brand-active-1').owlCarousel({
				items: 4,
				margin: 50,
				responsive: {
					768: {
						item: 4
					},
					320: {
						items: 2,
						margin: 20
					}
				}
			});

			$('.brand-active-2').owlCarousel({
				items: 4,
				margin: 0,
				responsive: {
					320: {
						items: 1
					},
					480: {
						items: 2
					},
					768: {
						items: 3
					},
					769: {
						items: 4
					}

				}
			});

			$('.slide-active-1').owlCarousel({
				items: 1,
				loop: true,
				nav: true,
				navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
				animateIn: 'fadeIn',
				animateOut: 'zoomOut',
				smartSpeed: 100
			});

			$('.ThumbSlideActiveOne').owlCarousel({
				items: 1,
				loop: true,
				nav: true,
				navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
				smartSpeed: 100
			});

			var tstSliderOne = $('.slide-active-2');
			tstSliderOne.owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 8000,
				smartspeed: 500,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut'
			});
			var tstSlideHeight = tstSliderOne.height();
			tstSliderOne.css({
				minHeight: tstSlideHeight + 'px'
			});

			tstSliderOne.on('translate.owl.carousel', function () {
				$(this).find('.owl-item .item  > *').removeClass('slideInRight animated').css('opacity', 0);
			});
			tstSliderOne.on('translated.owl.carousel', function () {
				$(this).find('.owl-item.active .item  > *').addClass('slideInRight animated').css('opacity', 1);
			});

			var tstSliderTwo = $('.slide-active-3');
			tstSliderTwo.owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 8000,
				smartspeed: 1500
			});
			var tstSlideHeight = tstSliderOne.height();
			tstSliderTwo.css({
				minHeight: tstSlideHeight + 'px'
			});

			tstSliderTwo.on('translated.owl.carousel', function () {
				$(this).find('.owl-item.active .item  > *').addClass('bounceInLeft animated').css('opacity', 1);
			});
			tstSliderTwo.on('translate.owl.carousel', function () {
				$(this).find('.owl-item .item > *').removeClass('bounceInLeft animated').css('opacity', 0);
			});

		}

		//Counter UP Activated
		if ($.fn.counterUp) {
			$('.count').counterUp();
		}

		//Masonry Activated
		if ($.fn.masonry) {
			$('.portfolio-items').masonry({
				itemSelector: '.sin-portfolio',
				columnWidth: 1,
				percentPosition: true
			});

			$('.portfolio-wrap-8').masonry({
				itemSelector: '.portfolio-grid-8',
				columnWidth: 1,
			});
		}


		//Content & Image Height Calculate
		var leftHeight = $('.left-height').height();
		var rightHeight = $('.right-height').height();
		var mainHeight = (leftHeight - rightHeight) / 2;
		$('.right-height').css({
			paddingTop: mainHeight + 'px',
			paddingBottom: mainHeight + 'px'
		});

		//Content & Image Height Calculate
		var leftHeightMargin = $('.left-margint-cal').height();
		var rightHeightMargin = $('.right-margint-cal').height();
		var mainMargin = (leftHeightMargin - rightHeightMargin) / 2;
		$('.right-margint-cal').css({
			paddingTop: mainMargin + 'px',
			paddingBottom: mainMargin + 'px'
		});

		//Accordion JS
		var dd = $('dd');
		dd.filter(':nth-child(n+4)').hide();
		$('dl.accordion').on('click', 'dt', function () {
			$(this)
				.addClass('active')
				.siblings('dt')
				.removeClass('active');
			$(this)
				.next()
				.slideToggle(200)
				.siblings('dd')
				.slideUp(300);
		});


		//Search Big Boxs Trigger
		$('.search-switch').on('click', function () {
			$('#header-areaFive').find('.search-box-big').addClass('active');
		});

		$('.search-close').on('click', function () {
			$('#header-areaFive').find('.search-box-big').removeClass('active');
		});

		$('.search-switch-2').on('click', function () {
			$('.homeFour').find('.search-box-big-2').addClass('active');
		});

		$('.search-close').on('click', function () {
			$('.homeFour').find('.search-box-big-2').removeClass('active');
		});

		$('.search-switch-3').on('click', function () {
			$('.homeThree').find('.search-box-big-3').addClass('active');
		});

		$('.search-close').on('click', function () {
			$('.homeThree').find('.search-box-big-3').removeClass('active');
		});


		//jQuery Cirle Progress Bar Activated
		if ($.fn.circleProgress) {
			var windowWidth = $(window).width();
			$('.sin-skill-bar').circleProgress({
				size: 150,
				thickness: 8,
				fill: {
					color: "#f64747",
					duration: 5000
				},
				emptyFill: '#c4c4c4'
			}).on('circle-animation-progress', function (event, progress, stepValue) {
				$(this).find('strong').text(String(stepValue.toFixed(2) + '%').substr(2));
			});
		}

		//tYped jQuery Activated
		if ($.fn.typed) {
			$('span.typed-text').typed({
				strings: ["Great", "Awesome"],
				typeSpeed: 200,
				loop: true,
				startDelay: 200
			});
		}
		
		var winWid = $(window).width();

		//PrettyPhoto Activated
		if ($.fn.prettyPhoto && winWid > 767 ) {
			$('a.light-box').prettyPhoto();
		}
		
		if( winWid < 767 ){
			$('.video-btn').attr('target', '_blank');
		}

		//DropDown Menu JS
		$('.dropParent').on('click', function () {
			$('.dropChild').toggleClass('mobileMenuShow');
		});
		$('.dropGrandParent').on('click', function () {
			$('.dropGrandParent').toggleClass('mobileGrandShow');
		});
		$('.dropParent a').on('click', function (event) {
			event.preventDefault();
		});

		$('.MmenuParent').on('click', function () {
			$('.megaMenu').toggleClass('MmenuShow');
		});


	});


	$(window).load(function () {

		var thumbNheight = $('.right-thumb').height();
		var contenNheight = $('.left-details').height();
		var mainNheight = (thumbNheight - contenNheight) / 2;
		$('.left-details').css({
			paddingTop: mainNheight + 'px',
			paddingBottom: mainNheight + 'px'
		});


		//Isotope Activated
		if ($.fn.isotope) {

			$(".portfolio-items-2").isotope({
				filter: '*',
				layoutMode: 'packery',
				itemSelector: '.sin-portfolio-5',
			});

			$('.portfolio-filter li').on('click', function () {
				$(".portfolio-filter li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr('data-filter');
				$(".portfolio-items-2").isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});

			$(".portfolio-wrap-six").isotope({
				filter: '*',
			});

			$('ul.portfolio-filter-2 li').on('click', function () {
				$("ul.portfolio-filter-2 li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr('data-filter');
				$(".portfolio-wrap-six").isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});

			$(".portfolio-wrap-7").isotope({
				filter: '*',
				layoutMode: 'packery',
				itemSelector: '.sin-portfolio-7'
			});

			$('.portfolio-filter-7 li').on('click', function () {
				$(".portfolio-filter-7 li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr('data-filter');
				$(".portfolio-wrap-7").isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});

			$(".portfolio-wrap-7").isotope({
				filter: '*',
				layoutMode: 'packery',
				itemSelector: '.portfolio-grid-8'
			});

			$('.portfolio-filter-7 li').on('click', function () {
				$(".portfolio-filter-7 li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr('data-filter');
				$(".portfolio-wrap-7").isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});

		}
	});


	//Click event to scroll to top
	$('.scroll-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Preloader JS
	$('.preloader').fadeOut('slow', function () {
		$(this).remove();
	});


}(jQuery));