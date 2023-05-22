const showSection = () => {
    const hash = window.location.hash.slice(1);
    const sections = document.querySelectorAll('.page');
    const links = document.querySelectorAll('.navigation__link, .page-nav__link');

    sections.forEach(section => { section.id === hash ? section.style.display = 'block' : section.style.display = 'none' })

    for (const link of links) {
        const linkURL = link.getAttribute('href');
        const hashIndex = linkURL.indexOf('#');
        const linkHash = hashIndex !== -1 ? linkURL.substring(hashIndex + 1) : '';

        let classActive = '';

        if (link.classList.contains('navigation__link')) {
            classActive = 'navigation__link_active';
        }

        if (link.classList.contains('page-nav__link')) {
            classActive = 'page-nav__link_active';
        }

        if (linkHash === hash) {
            link.classList.add(classActive);
        } else {
            link.classList.remove(classActive);
        }
    }
};

export const pageControlInit = () => {
    window.addEventListener('load', showSection);
    window.addEventListener('hashchange', showSection);
};