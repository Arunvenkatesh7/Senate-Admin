"use strict";

// add your custom functions 
function clientCarosule() {
    if ($('#clients .owl-carousel').length) {
        $('#clients .owl-carousel').owlCarousel({
            loop: true,
            margin: 45,
            nav: true,
            dots: false,
            autoWidth: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: true,
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
                1000: {
                    items: 5
                }
            }
        });
    }
}
// add your custom functions 
function testimonailCarosule() {
    if ($('#testimonials-construct-home .owl-carousel').length) {
        $('#testimonials-construct-home .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
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
                1000: {
                    items: 2
                }
            }
        });
    }
}
// add your custom functions 
function teamCarosule() {
    if ($('#our-team-construct .owl-carousel').length) {
        $('#our-team-construct .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
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
                1000: {
                    items: 4
                }
            }
        });
    }
}
// Gallery masonary style
function galleryMasonaryLayout() {
    if ($('.masonary-gallery').length) {
        $('.masonary-gallery').isotope({
            layoutMode: 'masonry'
        });
    }
}
// Google Map
function gMap() {
    if ($('.google-map').length) {
        $('.google-map').each(function() {
            // getting options from html 
            var mapName = $(this).attr('id');
            var mapLat = $(this).data('map-lat');
            var mapLng = $(this).data('map-lng');
            var iconPath = $(this).data('icon-path');
            var mapZoom = $(this).data('map-zoom');
            var mapTitle = $(this).data('map-title');

            // if zoom not defined the zoom value will be 15;
            if (!mapZoom) {
                var mapZoom = 15;
            };
            // init map
            var map;
            map = new GMaps({
                div: '#' + mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if (iconPath) {
                map.addMarker({
                    icon: iconPath,
                    lat: mapLat,
                    lng: mapLng,
                    title: mapTitle
                });
            }
        });
    };
}
// revolution slider
function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        jQuery("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 9000,
            navigation: {
                arrows: {
                    enable: true
                }
            },
            gridwidth: 1170,
            gridheight: 740
        });
    };
}
// Adding hover effect to gallery 
function galleryHover() {
    // hover effect for masonary gallery
    if ($('.masonary-gallery').length) {
        $('.masonary-gallery .content-wrap').each(function() {
            $(this).addClass('hvr-shutter-in-vertical');
        });
    };
    // hover effect for normal gallery
    if ($('.normal-gallery').length) {
        $('.normal-gallery .content-wrap').each(function() {
            $(this).addClass('hvr-rectangle-out');
            $(this).parent().parent().addClass('mix');
        });
    };

}

// custom tab for Service section 
function customTabServiceTab() {
    if ($('#service-we-provide .service-tab-title').length) {
        var tabWrap = $('#service-we-provide .col-lg-9 .service-tab-content');
        var tabClicker = $('#service-we-provide .service-tab-title ul li');

        tabWrap.children('div').hide();
        tabWrap.children('div').eq(0).show();
        tabClicker.on('click', function() {
            var tabName = $(this).data('tab-name');
            tabClicker.removeClass('active');
            $(this).addClass('active');
            var id = '#' + tabName;
            tabWrap.children('div').not(id).hide();
            tabWrap.children('div' + id).fadeIn('500');
            return false;
        });
    }
}
// gallery filter activation
function GalleryFilter() {

    if ($('#image-gallery-mix').length) {
        $('.gallery-filter').find('li').each(function() {
            $(this).addClass('filter');
        });
        $('#image-gallery-mix').mixItUp();
    };
    if ($('.gallery-filter.masonary').length) {
        $('.gallery-filter.masonary span').on('click', function() {
            var selector = $(this).parent().attr('data-filter');
            $('.gallery-filter.masonary span').parent().removeClass('active');
            $(this).parent().addClass('active');
            $('#image-gallery-isotope').isotope({
                filter: selector
            });
            return false;
        });
    }
}
// Mobile Navigation
function mobileNavToggler() {
    if ($('header .mainmenu-container').length) {
        $('header button.mainmenu-toggler').on('click', function() {
            $('ul.mainmenu').slideToggle();
            return false;
        });
        $('.mainmenu-container ul li.dropdown').append(function() {
            return '<i class="fa fa-bars"></i>';
        });
        $('.mainmenu-container ul li.dropdown .fa').on('click', function() {
            $(this).parent('li').children('ul').slideToggle();
        });

    }
}
// wow activator
function wowActivator() {
    var wow = new WOW({
        offset: 0
    });
    wow.init();
}
// gallery fancybox activator 
function GalleryFancyboxActivator() {
    var galleryFcb = $('.fancybox');
    if (galleryFcb.length) {
        galleryFcb.fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }
}
// video section fancybox 
function videoFancyBox() {
    var videoFancyBox = $('a.video-fancybox');
    if (videoFancyBox.length) {
        videoFancyBox.each(function() {
            $(this).on('click', function() {
                $(this).fancybox({
                    'padding': 0,
                    'autoScale': false,
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'title': this.title,
                    'width': 680,
                    'height': 495,
                    'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                    'type': 'swf',
                    'swf': {
                        'wmode': 'transparent',
                        'allowfullscreen': 'true'
                    }
                });
                return false;
            });
        });
    };
}
//Contact Form Validation
function contactFormValidation() {
    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).parent('div').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
}
//Request a qoute Form Validation
function rqaFormValidation() {
    if ($('.rqa-form').length) {
        $('.rqa-form').each(function() {
            // caching the value
            var form = $(this);

            form.validate({ // initialize the plugin
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                        number: true
                    },
                    city: {
                        required: true
                    }
                },
                submitHandler: function(form) {
                    // sending value with ajax request
                    $.post($(form).attr('action'), $(form).serialize(), function(response) {
                        $(form).parent('div').append(response);
                        $(form).find('input[type="text"]').val('');
                        $(form).find('input[type="email"]').val('');
                        $(form).find('textarea').val('');
                    });
                    return false;
                }
            });

        });
    }
}
//Hide Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').fadeOut();
    }
}
// Header top Search button 
function headerTopSearch() {
    if ($('header .mainmenu-container ul li.top-icons.search a').length) {
        $('header .mainmenu-container ul li.top-icons.search a').on('click', function() {
            $('header .search-box').slideToggle();
            $('header .cart-box').slideUp();
            return false;
        });
    }
}
// Header top Cart button 
function headerTopCart() {
    if ($('header .mainmenu-container ul li.top-icons.cart a').length) {
        $('header .mainmenu-container ul li.top-icons.cart a').on('click', function() {
            $('header .search-box').slideUp();
            $('header .cart-box').slideToggle();
            return false;
        });
    }
}
// Banner Tab creation
function BannerTabActivation() {
    // grabing the elements
    var bannerTabContentTitle = $('.banner-form .tab-title');
    var bannerTabContentContainer = $('.banner-form .tab-content');

    if (bannerTabContentTitle.length) {
        // hide and showing 
        bannerTabContentContainer.find('div').hide();
        bannerTabContentContainer.find('div').eq(0).show();

        // creating functionality while clicking
        bannerTabContentTitle.children('div').on('click', function() {
            //adding active class
            bannerTabContentTitle.children('div').removeClass('active');
            $(this).addClass('active');
            var tabTitle = $(this).data('title');
            // toggling form
            bannerTabContentContainer.find('div').hide();
            bannerTabContentContainer.find('#' + tabTitle).fadeIn();
        });
    }
}
// Request a Qoute Tab creation
function RequestQoutTabActivation() {
    // grabing the elements
    var bannerTabContentTitle = $('#request-a-qoute-container .tab-title ul li');
    var bannerTabContentContainer = $('#request-a-qoute-container .tab-content');

    if (bannerTabContentTitle.length) {
        // hide and showing 
        bannerTabContentContainer.find('div').hide();
        bannerTabContentContainer.find('div').eq(0).show();

        // creating functionality while clicking
        bannerTabContentTitle.children('span').on('click', function() {
            //adding active class
            bannerTabContentTitle.children('span').removeClass('active');
            $(this).addClass('active');
            var tabTitle = $(this).parent().data('tab-title');
            // toggling form
            bannerTabContentContainer.find('div').hide();
            bannerTabContentContainer.find('#' + tabTitle).fadeIn();
        });
    }
}
// sticky header 
function stickyHeader() {
    var headerScrollPos = $('header').next().offset().top;
    if ($(window).scrollTop() > headerScrollPos) {
        $('header').addClass('header-fixed');
    } else if ($(this).scrollTop() <= headerScrollPos) {
        $('header').removeClass('header-fixed');
    }
}

function footerMenuToggler() {
    var menuToggler = $('button.footer-nav-toggler');
    var menuUl = $('.footer-menu ul');
    if (menuUl.length) {
        menuToggler.on('click', function() {
            menuUl.slideToggle();
        });
    }
}

function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function() {
            timer.countTo();
        })
    }

}

function ParallaxActivation() {
    //Parallax Scroll
    var ParallaxSection = $('.parallax');
    if (ParallaxSection.length) {
        ParallaxSection.each(function() {
            $(this).scrolly({
                bgParallax: true
            });
        });

    }

}

function SmoothMenuScroll() {
    var anchor = $('.scrollToLink');
    if (anchor.length) {
        anchor.children('a').bind('click', function(event) {
            if ($(window).scrollTop() > 10) {
                var headerH = '45';
            } else {
                var headerH = '125';
            }
            var target = $(this);
            $('html, body').stop().animate({
                scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
            }, 1200, 'easeInOutExpo');
            anchor.removeClass('current');
            target.parent().addClass('current');
            event.preventDefault();
        });
    }
}

function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.mainmenu.one-page-scroll-menu .scrollToLink').find('a').each(function() {
            // grabing section id dynamically
            var sections = $(this).attr('href');
            $(sections).each(function() {
                // checking is scroll bar are in section
                if ($(this).offset().top <= windscroll + 100) {
                    // grabing the dynamic id of section
                    var Sectionid = $(sections).attr('id');
                    // removing current class from others
                    $('.mainmenu').find('li').removeClass('current');
                    // adding current class to related navigation
                    $('.mainmenu').find('a[href=#' + Sectionid + ']').parent().addClass('current');
                }
            });
        });
    } else {
        $('.mainmenu.one-page-scroll-menu li.current').removeClass('current');
        $('.mainmenu.one-page-scroll-menu li:first').addClass('current');
    }
}

function customTabProductPageTab() {
    if ($('.product-details-tab-title').length) {
        var tabWrap = $('.product-details-tab-content');
        var tabClicker = $('.product-details-tab-title ul li');

        tabWrap.children('div').hide();
        tabWrap.children('div').eq(0).show();
        tabClicker.on('click', function() {
            var tabName = $(this).data('tab-name');
            tabClicker.removeClass('active');
            $(this).addClass('active');
            var id = '#' + tabName;
            tabWrap.children('div').not(id).hide();
            tabWrap.children('div' + id).fadeIn('500');
            return false;
        });
    }
}
// accrodion 
function thmAccrodion() {
    if ($('.accrodion-wrap').length) {
        $('.accrodion').find('.accrodion-header').eq(0).find('.expander').removeClass('plus').addClass('minus');
        $('.accrodion').eq(0).addClass('active').find('.accrodion-content').slideDown();
        $('.accrodion').each(function() {
            $(this).find('.accrodion-header').on('click', function() {
                if ($(this).parent().hasClass('active') === false) {
                    $('.accrodion').find('.accrodion-header').find('.expander').removeClass('minus').addClass('plus');
                    $('.accrodion').removeClass('active');
                    $('.accrodion').find('.accrodion-content').slideUp();
                    $(this).find('.expander').toggleClass('minus plus');
                    $(this).parent().addClass('active').find('.accrodion-content').slideToggle();
                }
            });
        });
    };
}

function expertizeRoundCircle() {
    var rounderContainer = $('.single-expertize .icon');
    if (rounderContainer.length) {
        rounderContainer.each(function() {
            var Self = $(this);
            var value = Self.data('value');
            var size = Self.parent().width();
            var color = Self.data('fg-color');

            Self.find('span').each(function() {
                var expertCount = $(this);
                expertCount.appear(function() {
                    expertCount.countTo({
                        from: 1,
                        to: value * 100,
                        speed: 3000
                    });
                });

            });
            Self.appear(function() {
                Self.circleProgress({
                    value: value,
                    size: 142,
                    thickness: 10,
                    emptyFill: 'rgba(47,67,96,1)',
                    animation: {
                        duration: 3000
                    },
                    fill: {
                        color: color
                    }
                });
            });
        });
    };
}



// Dom Ready Function
$(document).on('ready', function() {
    // add your functions
    (function($) {
        clientCarosule();
        galleryMasonaryLayout();
        gMap();
        revolutionSliderActiver();
        galleryHover();
        GalleryFilter();
        mobileNavToggler();
        customTabServiceTab();
        wowActivator();
        contactFormValidation();
        rqaFormValidation();
        headerTopSearch();
        headerTopCart();
        BannerTabActivation();
        RequestQoutTabActivation();
        GalleryFancyboxActivator();
        footerMenuToggler();
        ParallaxActivation();
        SmoothMenuScroll();
        customTabProductPageTab();
        videoFancyBox();
        thmAccrodion();
        expertizeRoundCircle();
        teamCarosule();
        testimonailCarosule();

    })(jQuery);


});
// window on load functino
$(window).on('load', function() {
    // add your functions
    (function($) {
        CounterNumberChanger();
        handlePreloader();
    })(jQuery);
});
// window on scroll functino
$(window).on('scroll', function() {
    // add your functions
    (function($) {
        stickyHeader();
        OnePageMenuScroll();
    })(jQuery);
});