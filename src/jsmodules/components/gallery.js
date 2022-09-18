'use: strict';

import Util from '../util.js';
import img1 from '../../assets/gallery-1.jpg';
import img2 from '../../assets/gallery-2.jpg';
import img3 from '../../assets/gallery-3.jpg';
import img4 from '../../assets/gallery-4.jpg';
import img5 from '../../assets/gallery-5.jpg';
import img6 from '../../assets/gallery-6.jpg';
import img7 from '../../assets/gallery-7.jpg';
import img8 from '../../assets/gallery-8.jpg';
import img9 from '../../assets/gallery-9.jpg';

export default class Gallery extends Util {
  build() {
    const main = document.querySelector('main');
    const section = super.create('section', 'py-24');
    section.id = 'gallery';

    const container = super.create('div', 'wrapped');
    const heading = super.create('h2', 'section-header');
    heading.textContent = 'Check out our grub...';

    const imageGrid = super.create(
      'div',
      'grid',
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'gap-4'
    );

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    for (let i = 0; i < images.length; i++) {
      const imageBox = super.create(
        'div',
        'w-84',
        'h-84',
        'gallery-img',
        'overflow-hidden',
        'rounded-lg',
        'shadow-md',
        'hover:scale-105',
        'hover:shadow-xl',
        'duration-200',
        'relative',
        'after:absolute',
        'after:h-30',
        'after:bg-black',
        'after:bottom-0',
        'after:left-0',
        'after:right-0',
        'after:content-["yolo"]',
        'after:h-24',
        'after:opacity-80',
        'after:p-2',
        'after:text-gray-300',
        'after:translate-y-full',
        'hover:after:translate-y-0',
        'after:duration-200'
      );
      const image = super.create(
        'img',
        'object-cover',
        'object-center',
        'w-full',
        'h-full'
      );
      image.setAttribute('src', images[i]);
      imageBox.append(image);
      imageGrid.append(imageBox);
    }

    container.append(heading, imageGrid);
    section.append(container);

    main.append(section);
  }
}
