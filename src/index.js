import './index.html';
import './page.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './/index.scss';
// new modules


import { slidersInit } from './modules/slider';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initTopScrollButton } from './modules/topScrollButton';
import { pageControlInit } from './modules/pageControl';

//use modules
videoBackgroundInit();
menuControl();
locationHover();
initTopScrollButton('arrow-top', {
    hover: false,
}
);
pageControlInit();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
        enabled: true,
    }
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) =>
    item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
);

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
        enabled: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: {
                enabled: false,
            },
        },

        1024: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            pagination: {
                enabled: false,
            },
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                enabled: false,
            },
        }
    }
});



