// Hamburger icion
const menuButton = document.getElementById('toggle');
const navbarMenu = document.getElementById('navbar-menu');
const hamburgerIcon = document.getElementById('hamburger-icon')

menuButton.addEventListener('click', function() {
    navbarMenu.classList.toggle('opened');
    this.classList.toggle('opened');

    if (this.classList.contains('opened')) {
        hamburgerIcon.src = 'images/icon-close-menu.svg';
    } else {
        hamburgerIcon.src = 'images/icon-menu.svg';
    }
});

// Dropdown menu with link icon rotated up/down  
const dropdownLinks = document.querySelectorAll('.dropdown');
const dropdowns = document.querySelectorAll('.navbar__list__item__dropdown');

dropdownLinks.forEach((dropdown, index) => {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('opened');
        dropdowns[index].classList.toggle('opened');
        let icon = this.querySelector('.arrow-icon');

        if (this.classList.contains('opened')) {
            icon.src = 'images/icon-arrow-up.svg';
        } else {
            icon.src = 'images/icon-arrow-down.svg';

        }
    });
})