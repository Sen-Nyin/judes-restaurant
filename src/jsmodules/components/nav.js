'use: strict';

import Util from '../util.js';

export default class Nav extends Util {
  build(navItems, name, city) {
    const brandName = document.querySelector('[data-label="Brand Name"]');
    const brandLocation = document.querySelector('[data-label="City"]');
    const navList = document.querySelector('[data-label="Menu"]');
    const navToggle = document.getElementById('navtoggle');
    navToggle.addEventListener('click', this.toggleNav);
    const burger = super.svg(
      'burger',
      'text-slate-50',
      'hover:text-red-800',
      'fill-current',
      'w-6',
      'h-6',
      'cursor-pointer'
    );
    navToggle.append(burger);

    brandName.textContent = `${name}`;
    brandLocation.textContent = `${city}`;
    navItems.forEach((item) => {
      const listItem = super.create('li', 'w-full', 'text-center');
      const link = super.create('a', 'nav-link', 'md:py-6');
      link.textContent = `${item}`;
      link.dataset.target = `${item}`;
      listItem.append(link);
      navList.append(listItem);
    });
  }
}
