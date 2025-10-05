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


// Добавление класса active к кнопке "В корзину"
document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопки "В корзину"
    document.querySelectorAll('.product-card-btn .btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCardBtn = this.closest('.product-card-btn');
            productCardBtn.classList.add('active');
        });
    });
    
    // Обработка кнопок + и -
    document.addEventListener('click', function(e) {
        const countButton = e.target.closest('.product-card-count button');
        if (countButton) {
            const countBlock = e.target.closest('.product-card-count');
            const input = countBlock.querySelector('input');
            let value = parseInt(input.value);
            
            if (countButton.textContent === '+') {
                input.value = value + 1;
            } else if (countButton.textContent === '-' && value > 1) {
                input.value = value - 1;
            } else if (countButton.textContent === '-' && value === 1) {
                // Если значение становится 1 и нажимаем "-" - возвращаем кнопку "В корзину"
                const productCardBtn = countBlock.closest('.product-card-btn');
                productCardBtn.classList.remove('active');
                input.value = 1; // Сбрасываем значение
            }
        }
    });
});
