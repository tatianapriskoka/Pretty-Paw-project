export const menuControl = () => {
    const navigationButton = document.querySelector('.navigation__button');
    const navigationList = document.querySelector('.navigation__list');
    const navigationItem = document.querySelectorAll('.navigation__item');

    const openMenu = () => {
        navigationButton.classList.add('navigation__button_active');
        navigationList.style.display = 'block';
    }
    const closeMenu = () => {
        navigationButton.classList.remove('navigation__button_active');
        navigationList.style.display = '';
    }

    navigationButton.addEventListener('click', () => {
        if (navigationButton.classList.contains('navigation__button_active')) {
            closeMenu();
        } else {
            openMenu();
        }

    })
}