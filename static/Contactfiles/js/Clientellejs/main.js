(function($) {
    "use strict";
    /*--
    Commons Variables
    -----------------------------------*/
    var windows = $(window);

    /*--
        Menu Sticky
    -----------------------------------*/
    var sticky = $('.header-sticky');

    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 300) {
            sticky.removeClass('is-sticky');
        } else {
            sticky.addClass('is-sticky');
        }
    });

    /*---------------------------- 
       3. Sidebar Search Active
    -----------------------------*/
    function sidebarSearch() {
        var searchTrigger = $('.header-search-toggle'),
            endTriggersearch = $('button.search-close'),
            container = $('.main-search-active');

        searchTrigger.on('click', function() {
            container.addClass('inside');
        });

        endTriggersearch.on('click', function() {
            container.removeClass('inside');
        });

    };
    sidebarSearch();

    /*---------------------------------
    	Light Gallery Activation
    -----------------------------------*/
    $("#video-gallery, .product-gallery, .portfolio-gallery").lightGallery({
        selector: '.item',
    });

    /*--------------------------
        FFCounter Up
    ---------------------------- */
    $('.FFcounter').counterUp({
        delay: 70,
        time: 5000
    });

    /*--------------------------------
        Match Height Active
    ----------------------------------*/
    $('.single-feature-list, .cta-6-content, .call-us').matchHeight();

    /*------------------------------ 
        Nice Select Active
    ---------------------------------*/
    $('.nice-select').niceSelect();

    /*---------------------------------
    	Minicart Activation
    -----------------------------------*/

    $('.mini-cart').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings('.shopping-cart').slideToggle('400');
        $(this).siblings('.shopping-cart').toggleClass('show');
        var $cartWrapper = $(this).parents('.mini-cart').siblings().children('.shopping-cart');
        $(this).parents('.header-cart').siblings().children('.shopping-cart').slideUp('400');
    })

    function clickBody() {
        $('body').on('click', function(e) {
            $('.shopping-cart').slideUp('500');
        });
        $('.shopping-cart').on('click', function(e) {
            e.stopPropagation();
        })
    };
    clickBody();

    /*--
        Mobile Menu
    -----------------------------------*/
    var mainMenuNav = $('.main-menu-mobile');
    mainMenuNav.meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu',
        meanMenuClose: '<span class="menu-close"></span>',
        meanMenuOpen: '<span class="menu-bar"></span>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '0',
    });
    /*--------------------------
        Progress Bar Js
    -----------------------------*/
    $('.progress-bar').each(function() {
        var $this = $(this);
        var $width = $this.data('width');

        $this.css("width", $width);

    });
    /*--
        - Background Image
    ------------------------------------------*/
    var $backgroundImage = $('.bg-image');
    $backgroundImage.each(function() {
        var $this = $(this),
            $bgImage = $this.data('bg');
        $this.css('background-image', 'url(' + $bgImage + ')');
    });

    /*---------------------------
        Slider Range Active
    -----------------------------*/
    var $rangeSlider = $('.range-slider');
    $rangeSlider.each(function() {
        var $this = $(this),
            $min = $this.data('min'),
            $max = $this.data('max'),
            $value = $this.data('value'),
            $step = $this.data('step');
        $this.slider({
            orientation: 'horizontal',
            range: 'min',
            min: $min,
            max: $max,
            value: $value,
            step: $step,
            slide: function(event, ui) {
                $uiHandle.html('<span>' + ui.value + '</span>');
            }
        });
        console.log($value);
        var $uiHandle = $this.children('.ui-slider-handle');
        $uiHandle.html('<span>' + $this.slider('value') + '</span>');
    });
    /*-------------------------
        Radial Progress 02 
    ---------------------------*/
    $('.radial-progress').waypoint(function() {
        $('.radial-progress').easyPieChart({
            lineWidth: 5,
            scaleLength: 0,
            rotate: -45,
            trackColor: false,
            lineCap: 'square',
            size: 180
        });

    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });
    /*-------------------------------
        Datepicker Active
    --------------------------------*/
    $("#datepicker").datepicker();
    /*-------------------------------
        From Toggle Active
    --------------------------------*/
    $('.next-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        //    $this.css({"transform": "translateX(-300px)", "font-size": "200%"});
        $this.addClass('ext-option-hidden');
        $this.closest('form').find('.ext-options').slideDown();
        $this.siblings('.total-point').css({
            "padding-right": "0"
        });
    });

    /*----------------------------------- 
        Count Down Active 
    ----------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="countdown-wrap"><div class="day"><span class="number">%D</span><span class="text">days</span></div><div class="hour"><span class="number">%H</span><span class="text">hours</span></div><div class="minute"><span class="number">%M</span><span class="text">min</span></div><div class="second"><span class="number">%S</span><span class="text">sec</span></div></div>'));
        });
    });
    /*--
        Sliders
    -----------------------------------*/
    // Testimonial Slider
    $('.testimonial-slider-content').slick({
        infinite: true,
        arrows: true,
        fade: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.testimonial-slider-content-3').slick({
        infinite: true,
        arrows: true,
        fade: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.testimonial-slider-element-3').slick({
        infinite: true,
        arrows: true,
        fade: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.image-slider-3').slick({
        infinite: true,
        arrows: true,
        fade: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    // Service Slide Active
    $('.service-slide-active').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    // Service Gallery Slider
    $('.service-gallery').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
            }
        }, ]
    });
    // Portfolio Slider
    $('.portfolio-slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
            }
        }, ]
    });
    // Blog Gallery Slider
    $('.blog-carousel-active').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
    // Project Slider
    $('.project-slider-4-column').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.project-slider-3-column').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.portfolio-slider-3-column').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.portfolio-slider-3').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    // Brand Slider
    $('.brand-slider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    // Product Gallery Slider
    $('.product-gallery').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
            }
        }, ]
    });
    // Related Product Slider
    $('.related-product-active').slick({
        infinite: true,
        arrows: true,
        fade: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1501,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    /* --------------------------------------------------------
        FAQ Accordion 
    * -------------------------------------------------------*/
    $('.card-header a').on('click', function() {
        $('.card').removeClass('actives');
        $(this).parents('.card').addClass('actives');
    });

    /*--
        Project Filter
    -----------------------------------*/
    $(window).load(function() {
        $('.masonry__wrap').imagesLoaded(function() {

            // filter items on button click
            $('.gallery__menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $(this).parents('li').siblings().find('button').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // init Isotope
            var $grid = $('.masonry__wrap').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                itemSelector: '.element-item',
                masonry: {
                    columnWidth: '.resizer',
                }
            });

        });

    })

    /*-------------------------------------
        Direction Aware Hover Effect
    --------------------------------------*/
    var daHover = function() {
        $('.daHover').each(function() {
            $(this).hoverdir({
                hoverElem: '.daHoverElem'
            });
        });
    };
    daHover();

    /*--
        Tooltip Active
    -----------------------------------*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })



    /*----- 
    	Shipping Form Toggle
    --------------------------------*/
    $('[data-shipping]').on('click', function() {
        if ($('[data-shipping]:checked').length > 0) {
            $('#shipping-form').slideDown();
        } else {
            $('#shipping-form').slideUp();
        }
    })

    /*----- 
    	Payment Method Select
    --------------------------------*/
    $('[name="payment-method"]').on('click', function() {

        var $value = $(this).attr('value');

        $('.single-method p').slideUp();
        $('[data-method="' + $value + '"]').slideDown();

    })
    /*----------------------------------
        ScrollUp Active
    -----------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*------------------------
    	Sticky Sidebar Active
    -------------------------*/
    $('#sticky-sidebar').theiaStickySidebar({
        // Settings
        additionalMarginTop: 120
    })

    /*--
    	MailChimp
    -----------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });

    function mailChimpResponse(resp) {

        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

})(jQuery);