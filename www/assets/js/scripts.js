// Lorsque la page est complétement chargée
addEventListener('DOMContentLoaded', function(event) {
    let toggleMenu  = document.querySelector('.toggle-menu'),
        menu        = this.document.querySelector('#nav-links');

    toggleMenu.addEventListener('click', function(event) {
        menu.classList.toggle('active');
    });
})