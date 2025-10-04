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

const productCardSwiper = new Swiper('.product-card-swiper', {
    loop: true,
    pagination: {
        el: '.product-card-pagination',
        clickable: true,
    },
})

const newSwiper = new Swiper('.new-products-swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,
})
const hitSwiper = new Swiper('.hit-products-swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,
})
const solutionsSwiper = new Swiper('.solutions-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
})

const newsSwiper = new Swiper('.news-swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
})

// Инициализация пагинации для карточек с изображениями
document.addEventListener('DOMContentLoaded', function() {
    // Находим все карточки товаров
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        // Ищем слайдер с изображениями внутри карточки
        const swiperEl = card.querySelector('.swiper');
        const paginationEl = card.querySelector('.product-card-pagination');
        
        if (swiperEl && paginationEl) {
            // Даем уникальный ID пагинации для каждой карточки
            paginationEl.id = `pagination-${index}`;
            
            // Инициализируем слайдер с пагинацией
            new Swiper(swiperEl, {
                loop: true,
                pagination: {
                    el: `#pagination-${index}`,
                    clickable: true,
                },
                // Предотвращаем всплытие событий
                touchStartPreventDefault: false,
                touchMoveStopPropagation: true,
                // Отключаем автопрокрутку
                autoplay: false,
                // Изолируем каждый слайдер
                allowTouchMove: true,
                preventInteractionOnTransition: false,
            });
        }
    });
});


