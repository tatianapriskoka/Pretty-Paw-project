const debaunce = (fn, msec) => {
    let lastCall = 0;
    let lastCallTimer = 0;

    return (...arg) => {
        const prevCall = lastCall;
        lastCall = Date.now();

        if (prevCall && (lastCall - prevCall) < msec) {
            clearTimeout(lastCallTimer);
        }

        lastCallTimer = setTimeout(() => fn(...arg), msec)
    }

};


const createArrow = (className = 'arrow-up', { hover = true }) => {
    const button = document.createElement('button');
    button.innerHTML = `<svg class= "${className}__svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33332 5.92369V12.6666C7.33287 12.855 7.39665 13.0133 7.52465 13.1413C7.65265 13.2693 7.8111 13.3333 7.99998 13.3333C8.18843 13.3333 8.34665 13.2721 8.47465 13.1499C8.60265 13.0277 8.66665 12.8721 8.66665 12.6833L7.33332 5.92369ZM7.33332 5.92369L7.68687 5.57014L7.33332 5.21659H6.83332V5.71659M7.33332 5.92369L6.83332 5.71659M6.83332 5.71659L4.06665 8.48325C3.93332 8.61659 3.77776 8.68325 3.59998 8.68325C3.42221 8.68325 3.26665 8.61659 3.13332 8.48325C2.99998 8.34992 2.93332 8.19147 2.93332 8.00792C2.93332 7.82436 2.99998 7.66614 3.13332 7.53325L7.53332 3.13325C7.59998 3.06659 7.67221 3.01925 7.74998 2.99125C7.82776 2.96325 7.9111 2.94947 7.99998 2.94992C8.08887 2.94992 8.17221 2.9637 8.24998 2.99125C8.32776 3.01881 8.39998 3.06614 8.46665 3.13325L12.8667 7.53325C13 7.66659 13.0667 7.82481 13.0667 8.00792C13.0667 8.19103 13 8.34947 12.8667 8.48325L6.83332 5.71659ZM7.99748 3.44992H7.99998C8.03639 3.44992 8.06285 3.45541 8.08301 3.46255C8.08249 3.46236 8.08419 3.46284 8.08841 3.46561C8.09281 3.46849 8.10081 3.47444 8.11192 3.48563L8.1131 3.48681L12.5131 7.88681C12.5558 7.92949 12.5667 7.96177 12.5667 8.00792C12.5667 8.05402 12.5558 8.08678 12.5128 8.12998C12.4671 8.17561 12.4364 8.18325 12.4 8.18325C12.3635 8.18325 12.3327 8.17558 12.2869 8.1297L9.0202 4.86303L8.16665 4.00948V5.21659V12.6833C8.16665 12.7458 8.15137 12.7673 8.12935 12.7883C8.1008 12.8156 8.06899 12.8333 7.99998 12.8333C7.93728 12.8333 7.90799 12.8175 7.8782 12.7877C7.84848 12.758 7.83317 12.7293 7.83332 12.6678V12.6666V5.21659V4.00948L6.97976 4.86303L3.7131 8.1297C3.66722 8.17558 3.63649 8.18325 3.59998 8.18325C3.56348 8.18325 3.53275 8.17558 3.48687 8.1297C3.44444 8.08727 3.43332 8.05487 3.43332 8.00792C3.43332 7.96102 3.44438 7.92916 3.48628 7.8874L3.48687 7.88681L7.88687 3.48681C7.89819 3.47549 7.90657 3.46922 7.91156 3.46594C7.91639 3.46277 7.91889 3.46186 7.91934 3.46169C7.93799 3.45498 7.96274 3.44974 7.99748 3.44992Z" />
    </svg>`;

    button.classList.add(className);


    const style = document.createElement('style');

    style.textContent = `

    .${className}{
    position: fixed;
    z-index: 999;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(49, 33, 1, 0.15);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: none;
    color: #000000;
    ${hover && 'transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;'}
    }

    ${hover && `
    .${className}:hover{
        color: white;
        background-color: black;
    }}`}
            `;

    document.head.prepend(style);

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    });

    return button;
}

export const initTopScrollButton = (className, hover) => {
    const arrow = createArrow(className, hover);

    document?.body.append(arrow);

    const showElemScrollPosition = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        arrow.style.display = (scrollPosition > window.innerHeight / 2) ? 'flex' : 'none';

    };

    window.addEventListener('scroll', debaunce(showElemScrollPosition, 100));
}