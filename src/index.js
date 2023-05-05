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

const videeoBG = document.querySelector('.video-bg');
videeoBG.innerHTML = `
<source src = "video/video.webm" type= "video/webm"">
<source src = "video/video.mp4" type= "video/mp4"">
`;

