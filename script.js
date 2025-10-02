const mainSwiper = new Swiper('.main-slider .swiper', {
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: '.main-slider__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-slider .swiper-button-next',
        prevEl: '.main-slider .swiper-button-prev',
    },
})

const daySwiper = new Swiper('.day-product .swiper', {
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: '.day-product__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.day-product .swiper-button-next',
        prevEl: '.day-product .swiper-button-prev',
    },
})

const categoriesSwiper = new Swiper('.categories-swiper', {
    slidesPerView: 5,
    spaceBetween: 16.25,
    navigation: {
        nextEl: '.categories .swiper-button-next',
        prevEl: '.categories .swiper-button-prev',
    },
})