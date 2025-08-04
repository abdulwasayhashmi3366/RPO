$(".navbar-toggle").click(function () {
    $(this).toggleClass("active");
    $(".main-menu").slideToggle();
})

$(document).ready(function () {
    $('.about-us-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        // centerMode: true,
        // centerPadding: '140px',
        prevArrow: '<button type="button" class="slick-prev pull-left"> <img src="./images/slider-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><img src="./images/right-slider-arrow.png" alt=""> </button>',
        dots: false,
        autoplay: false,
        infinite: true,
        autoplayspeed: 1000,

        // responsive: [
        //     {
        //         breakpoint: 1199,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             infinite: true,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
});

$(document).ready(function (e) {
    // Show the first tab by default
    $('.tabs-stage .tabcontent').hide();
    $('.tabs-stage .tabcontent:first').show();
    $('.tabs-nav li:first').addClass('tab-active');

    // Change tab class and display content
    $('.tabs-nav a').on('click', function (event) {
        event.preventDefault();
        $('.tabs-nav li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('.tabs-stage .tabcontent').hide();
        $($(this).attr('href')).show();
    });
});

$(document).ready(function () {
    $('.advertisment-slider').slick({
        slidesToScroll: 9,
        slidesToShow: 9,
        // centerMode: true,
        // centerPadding: '140px',
        prevArrow: '<button type="button" class="slick-prev pull-left"> <img src="./images/slider-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><img src="./images/right-slider-arrow.png" alt=""> </button>',
        dots: false,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        infinite: true,
        autoplayspeed: 1000,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$(document).ready(function () {
    $('.studies-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        // centerMode: true,
        // centerPadding: '140px',
        prevArrow: '<button type="button" class="slick-prev pull-left"> <img src="./images/slider-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><img src="./images/right-slider-arrow.png" alt=""> </button>',
        dots: true,
        autoplay: false,
        infinite: true,
        autoplayspeed: 1000,

        // responsive: [
        //     {
        //         breakpoint: 1199,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             infinite: true,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
});

$(document).ready(function () {
    $('.team-slider').slick({
        slidesToScroll: 4,
        slidesToShow: 4,
        // centerMode: true,
        // centerPadding: '140px',
        prevArrow: '<button type="button" class="slick-prev pull-left"> <img src="./images/slider-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><img src="./images/right-slider-arrow.png" alt=""> </button>',
        dots: true,
        autoplay: false,
        infinite: true,
        autoplayspeed: 1000,

        // responsive: [
        //     {
        //         breakpoint: 1199,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             infinite: true,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
});