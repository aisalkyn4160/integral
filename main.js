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


document.addEventListener('DOMContentLoaded', () => {
   const showCatalog = document.querySelector('#show-catalog');
   const catalogMenu = document.querySelector('.catalog-menu');

   showCatalog?.addEventListener('click', () => {
       catalogMenu?.classList.toggle('active');
       showCatalog?.classList.toggle('active');
   });
});

document.addEventListener('DOMContentLoaded', () => {
   const showBussinesCatalog = document.querySelector('#show-bussines-catalog');
   const bussinesCatalogMenu = document.querySelector('.bussines-catalog-menu');

   showBussinesCatalog?.addEventListener('click', () => {
       bussinesCatalogMenu?.classList.toggle('active');
       showBussinesCatalog?.classList.toggle('active');
   });
});