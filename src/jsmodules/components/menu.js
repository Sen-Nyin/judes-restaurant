'use: strict';

import Util from '../util.js';
import img from '../../assets/gallery-3.jpg';
export default class Menu extends Util {
  build(data) {
    const food = data.menus;
    const main = document.querySelector('main');
    const section = super.create('section', 'py-24');
    const container = super.create('div', 'wrapped');
    const heading = super.create('h2', 'section-header');
    const menu = super.create(
      'ul',
      'flex',
      'flex-col',
      'gap-4',
      'px-4',
      'py-4',
      'rounded-md'
    );

    heading.textContent = `${data.headline}`;

    // loop through menu
    for (let i = 0; i < food.length; i++) {
      const { name, desc, price, image: pic } = food[i];

      const menuItem = super.create('li', 'menu-item');
      const imageBox = super.create('div', 'menu-image-box');

      const image = new Image();
      const imageAddress = `../../assets/${pic}`;
      image.classList.add('images');
      image.src = new URL(`${imageAddress}`, import.meta.url);
      imageBox.append(image);

      const detailBox = super.create('div', 'menu-details');
      const itemHeading = super.create('h3', 'text-xl', 'font-bold');
      itemHeading.textContent = `${name}`;
      const itemDesc = super.create('p');
      itemDesc.textContent = `${desc}`;
      detailBox.append(itemHeading, itemDesc);
      const priceBox = super.create('span', 'menu-price');
      priceBox.textContent = `${price}`;

      menuItem.append(imageBox, detailBox, priceBox);
      menu.append(menuItem);
    }

    container.append(heading, menu);
    section.append(container);
    main.append(section);
  }
}
