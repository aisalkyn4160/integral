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