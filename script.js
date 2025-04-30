$(document).ready(function () {
    $('.swiper').each(function (index) {
        let t = $(this);
        t.addClass('swiper-' + index);

        let swiper = new Swiper(t[0], {
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            speed: 32000,
            loop: true,
            loopAdditionalSlides: 1,
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: false,
        });
    });
});