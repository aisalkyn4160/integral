// Sticky header при скролле
let placeholder = null;

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header__top');
    const headerBottom = document.querySelector('.header__bottom');
    const headerTopRect = headerTop.getBoundingClientRect();
    
    // Если header__top ушел за пределы видимости, фиксируем header__bottom
    if (headerTopRect.bottom <= 0) {
        if (!headerBottom.classList.contains('sticky')) {
            // Создаем placeholder для сохранения места
            placeholder = document.createElement('div');
            placeholder.style.height = headerBottom.offsetHeight + 'px';
            placeholder.style.width = '100%';
            headerBottom.parentNode.insertBefore(placeholder, headerBottom.nextSibling);
            
            headerBottom.classList.add('sticky');
        }
    } else {
        if (headerBottom.classList.contains('sticky')) {
            headerBottom.classList.remove('sticky');
            // Удаляем placeholder
            if (placeholder && placeholder.parentNode) {
                placeholder.parentNode.removeChild(placeholder);
                placeholder = null;
            }
        }
    }
});


// Обработка каталогов
document.addEventListener('DOMContentLoaded', () => {
    const showCatalog = document.querySelector('#show-catalog');
    const showBussinesCatalog = document.querySelector('#show-bussines-catalog');
    const catalogMenu = document.querySelector('.catalog-menu:not(.bussines-catalog-menu)');
    const bussinesCatalogMenu = document.querySelector('.bussines-catalog-menu');

    // Функция для закрытия противоположного каталога
    const closeOppositeCatalog = (currentMenu, oppositeMenu, oppositeBtn) => {
        if (oppositeMenu?.classList.contains('active')) {
            oppositeMenu.classList.remove('active');
        }
        if (oppositeBtn?.classList.contains('active')) {
            oppositeBtn.classList.remove('active');
        }
    };

    // Обработчик для обычного каталога
    showCatalog?.addEventListener('click', () => {
        catalogMenu?.classList.toggle('active');
        showCatalog?.classList.toggle('active');
        
        // Закрываем бизнес-каталог если он открыт
        closeOppositeCatalog(catalogMenu, bussinesCatalogMenu, showBussinesCatalog);
    });

    // Обработчик для бизнес-каталога
    showBussinesCatalog?.addEventListener('click', () => {
        bussinesCatalogMenu?.classList.toggle('active');
        showBussinesCatalog?.classList.toggle('active');
        
        // Закрываем обычный каталог если он открыт
        closeOppositeCatalog(bussinesCatalogMenu, catalogMenu, showCatalog);
    });
});

// header-burger
$(function () {
    $('.header__burger').click(function () {
        $(this).toggleClass('active')
        $('.burger-menu').toggleClass('active');
        $('body').toggleClass('no-scroll');
        $('.sublist').removeClass('active');
    })
})
$(function () {
    $('.burger-menu__list .has-sublist-arrow').click(function () {
        $(this).toggleClass('active')
        $(this).siblings('.sublist').toggleClass('active');
    })
})
$(function () {
    $('.burger-menu__list .sublist h4').click(function () {
        $(this).parent('.sublist').removeClass('active');
    })
})

$(function () {
    $('.burger-menu__tab:first-child').addClass('active')
    $('.burger-menu__tabs-content:first-child').addClass('active')
    $('.burger-menu__tab').click(function () {
        $('.burger-menu__tab').removeClass('active');
        $('.burger-menu__tabs-content').removeClass('active');
        $(this).addClass('active');
        $(`.burger-menu__tabs-content[data-tab="${this.dataset.tab}"]`).addClass('active');
    });
})
// footer
$(function () {
    $('.footer-navs h5').click(function () {
        $(this).toggleClass('active')
        $(this).siblings('ul').slideToggle();
    })
})