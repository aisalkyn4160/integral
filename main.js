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
