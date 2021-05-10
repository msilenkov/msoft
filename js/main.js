$(document).ready(function(){
    let menu = ['DRM-защита документов', 'Виртуальная комната данных', 'Маркировка документов'];
    let introCurrentSlide = 0;


    let mySwiper = new Swiper ('.intro-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        loop: true,
        loopAdditionalSlides: 0,
        /*on: {
            slideChangeTransitionStart: function(swiper) {
                introCurrentSlide = swiper.activeIndex;
                let item = swiper.slides[introCurrentSlide];
                let itemPagination = swiper.pagination.bullets;
                $(item).addClass('postAnimate');

                console.log(introCurrentSlide);
            },
            slideNextTransitionEnd: function(swiper) {
                let item = swiper.slides[introCurrentSlide];
                $(item).removeClass('postAnimate');

                //console.log(swiper);
                console.log(introCurrentSlide);
            },
        },*/
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    let menuReview = [
        {
            name: 'Асхат Темергалиев',
            company: 'Казатомпром'
        },
        {
            name: 'Сергей Рысин',
            company: 'ГТЛК'
        },
        {
            name: 'Иван Минин',
            company: 'ВЭБ Капитал'
        }
    ];

    let reviewSlider = new Swiper ('.reviews-slider', {
        pagination: {
            el: '.swiper-review-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' +
                    '<span class="name">' + (menuReview[index].name) + '</span>' +
                    '<span class="company">' + (menuReview[index].company) + '</span>' +
                '</span>';
            },
        },
        loop: true,
        loopAdditionalSlides: 0,
        speed: 500,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 'auto',
            },
        },
    });

    let productsListMenu = ['DRM-защита документов', 'Виртуальная комната данных', 'Маркировка документов'];

    let productsList = new Swiper ('.products-list-slider', {
        spaceBetween: 20,
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-products-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (productsListMenu[index]) + '</span>';
            },
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                autoplay: false,
                loop: false,
                pagination: false
            },
        },
    });

    let productsListMenu2 = ['Корпоративный аналог Dropbox', 'Защита почтовых вложений', 'Защита почтовых вложений'];

    let productsList2 = new Swiper ('.products-list-slider2', {
        spaceBetween: 20,
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-products-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (productsListMenu2[index]) + '</span>';
            },
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                autoplay: false,
                loop: false,
                pagination: false
            },
        },
    });



    let productsListMenu3 = ['Внедряем On-Premise за 2 недели', 'SLA на техподдержку в день запроса', 'Высокий уровень доверия к продукту'];

    let productsList3 = new Swiper ('.products-list-slider3', {
        spaceBetween: 20,
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-products-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (productsListMenu3[index]) + '</span>';
            },
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                autoplay: false,
                loop: false,
                pagination: false
            },
        },
    });

    let partnersSlider = new Swiper ('.partners-slider', {
        spaceBetween: 20,
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-partners-pagination',
            clickable: true
        },
        slidesPerGroup: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
        },
    });

    // header scroll
    if($(window).scrollTop() > 0) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    $(window).scroll(function(event) {
        if($(window).scrollTop() > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
});
