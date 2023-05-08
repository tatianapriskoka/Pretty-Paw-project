import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
// new modules

import './index.scss';
import { slidersInit } from './modules/slider';

//use modules

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
        //bulletClass: 'about__bullet',
        //bulletActiveClass: 'about__bullet_active',
    }
});

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: false,
        },

        1024: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            pagination: false,
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: false,
        }
    }
});

const videeoBG = document.querySelector('.video-bg');
videeoBG.innerHTML = `
<source src = "video/video.webm" type= "video/webm"">
<source src = "video/video.mp4" type= "video/mp4"">
`;

