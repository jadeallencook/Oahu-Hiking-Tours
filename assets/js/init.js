(function ($) {
    'use strict';

    //
    // Preloader
    jQuery(window).load(function () {
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });

    $(document).ready(function () {
        //
        // Off Canvas
        $(".toggle-btn").on('click', function (e) {
            e.preventDefault();
            $('body').addClass('canvas-show');
        });
        $(".fp-close, .canvas-overlay, .nav > li > a").on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('canvas-show');
        });

        $(".sign-btn").on('click', function (e) {
            e.preventDefault();
            $(".sign-area").toggleClass("active");
        });

        //
        // Sticky Header
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $('body').addClass("sticky-nav");
            } else {
                $('body').removeClass("sticky-nav");
            }
        });
        $(window).scroll();

        //
        // Smooth Scrolling
        $('.nav a[href*=#]:not([href=#]), a.scroll-top[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 65
                    }, 500);
                    return false;
                }
            }
        });

        //
        // ScrollSpy
        $('body').scrollspy({
            target: '.scrollspy',
            offset: 75
        });

        //
        // Magnific Popup (Video)
        $('.play-btn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });

        //
        // Clients
        $('.review-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            items: 1,
            nav: true,
            navText: ['<i class="ion-ios-arrow-thin-left"><i/>', '<i class="ion-ios-arrow-thin-right"><i/>']
        });

        //  Counter Up
        $('.countup').counterUp({
            delay: 10,
            time: 1000
        });

        //
        // Contact
        var contact = $('.contact-form'),
            successMessage = $('.contact-success'),
            errorMessage = $('.contact-error');

        contact.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },

            messages: {
                name: {
                    required: "Come on! Enter your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "You have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },

            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "assets/php/contact.php",
                    success: function () {
                        successMessage.fadeIn();
                    },
                    error: function () {
                        contact.fadeTo("slow", 0.15, function () {
                            errorMessage.fadeIn();
                        });
                    }
                });
            }
        });


        // inserting google doc information
        // using tabletop to get gDoc
        function tabletop(doc) {
            Tabletop.init({
                key: doc,
                callback: insertDoc,
                simpleSheet: false
            });
        }
        // after gDoc loads
        function insertDoc(data, tabletop) {
            function insertHike(num, section) {
                return 'ul#' + data.schedule.elements[num].id + ' li span.' + section;
            }
            for (var num = 0; num < 3; num++) {
                $(insertHike(num, 'hike-name')).append(data.schedule.elements[num].name);
                $(insertHike(num, 'hike-date')).append(data.schedule.elements[num].date);
                $(insertHike(num, 'hike-time')).append(data.schedule.elements[num].time);
                $(insertHike(num, 'hike-miles')).append(data.schedule.elements[num].miles);
                $(insertHike(num, 'hike-hours')).append(data.schedule.elements[num].hours);
                $(insertHike(num, 'hike-difficulty')).append(data.schedule.elements[num].difficulty);
                $('span#' + data.schedule.elements[num].id + '-cost').append(data.schedule.elements[num].cost);
                $('input#' + data.schedule.elements[num].id + '-paypal-id').attr('value', data.schedule.elements[num].paypal);
                $('span#' + data.schedule.elements[num].id + '-banner-date').append(data.schedule.elements[num].date);
                $('span#' + data.schedule.elements[num].id + '-banner-time').append(data.schedule.elements[num].time);
            }
        }
        tabletop('15RCwv5Y3MyEcvDyGPDaLD1LYUsxQNezbmFvwU7X3IMA')

    });

})(window.jQuery);