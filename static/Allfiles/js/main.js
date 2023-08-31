/*================================================
[  Table of contents  ]
================================================

	01. Slick Slider Active
	02. Our Project Owl Active
	03. Our Team Owl Active
	04. Testimonial Owl Active
	05. Blog Owl Active
	06. Our Client Owl Active
	07. Counter Up
	08. Mail Chimp
	09. Wow Js Active
	10. Scrool Js
	11. TOP Menu Stick
	12. Menu Active
	13. ScroolSpy Men
	14. scrollUp
	
================================================*/

(function($) {
    "use strict";

    /* ************ 01. Slick Slider Active ************ */
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    /* ************ 02. Our Project Owl Active ************ */
    $('.project-tab-owl').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* ************ 03. Our Team Owl Active ************ */
    $('.ourteam-owl').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    /* ************ 04. Testimonial Owl Active ************ */
    $('.testimonial-owl').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    /* ************ 05. Blog Owl Active ************ */
    $('.blog-owl-active').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    /* ************ 06. Our Client Owl Active ************ */
    $('.ourclient-active').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        nav: false,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    /* ************ 07. Counter Up ************ */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* ************ 08. Mail Chimp ************ */
    $('#news-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'https://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });

    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

    /* ************ 09. Wow Js Active ************ */
    new WOW().init();

    /* ************ 10. Scrool Js ************ */
    $(".menu-active a, .scroll-icon a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });

    /*------ 11. TOP Menu Stick ------*/
    var wstick = $(window);
    wstick.on('scroll', function() {
        var scroll = wstick.scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });

    /*------ 12. Menu Active ------*/
    $(document).on("click", ".navbar-nav a", function() {
        $(".navbar-nav").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
    });

    /*------ 13. ScroolSpy Menu ------*/
    $('body').scrollspy({
        target: '#navigation'
    })

    /*------ 14. scrollUp ------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);