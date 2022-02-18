import './index.css';
import {
   images,
   cardImage
} from './scripts/constants/constants';

import {
   shuffle
} from './scripts/components/util.js';
for (const user of shuffle(cardImage)) {


   const imgClubs = document.createElement('img');
   const imgDiamonds = document.createElement('img');
   const imgHearts = document.createElement('img');
   const imgSpides = document.createElement('img');
   images.appendChild(imgClubs);
   images.appendChild(imgDiamonds);
   images.appendChild(imgHearts);
   images.appendChild(imgSpides);


   imgClubs.classList.add('img__clubs');
   imgDiamonds.classList.add('img__diamonds');
   imgHearts.classList.add('img__hearts');
   imgSpides.classList.add('img__spides');


   const imageSpides = () => {

      gsap.to(imgSpides, {
         x: 800,

         rotationY: "180deg"

      })
      imgSpides.setAttribute('style', `background-image:url('${user.imageLinkSpides}')`);
   }
   const imageClubs = () => {

      gsap.to(imgClubs, {
         x: 200,
         rotationY: "-180deg"
      })
      imgClubs.setAttribute('style', `background-image:url('${user.imageLinkClubs}')`);
   }

   const imageHearts = () => {

      gsap.to(imgHearts, {
         x: 400,
         rotationY: "-180deg"
      })
      imgHearts.setAttribute('style', `background-image:url('${user.imageLinkDiamonds}')`);
   }
   const imageDiamonds = () => {

      gsap.to(imgDiamonds, {
         x: 600,
         rotationY: "-180deg"
      })
      imgDiamonds.setAttribute('style', `background-image:url('${user.imageLinkHearts}')`);
   }


   imgClubs.addEventListener('click', imageClubs);
   imgSpides.addEventListener('click', imageSpides);
   imgHearts.addEventListener('click', imageHearts);
   imgDiamonds.addEventListener('click', imageDiamonds);
}