import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
// new modules

import './index.scss';

//use modules

const videeoBG = document.querySelector('.video-bg');
videeoBG.innerHTML = `
<source src = "video/video.webm" type= "video/webm"">
<source src = "video/video.mp4" type= "video/mp4"">
`;

