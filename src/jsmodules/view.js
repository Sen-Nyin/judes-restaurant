'use: strict';

import Util from './util.js';

export default class View extends Util {
  constructor() {
    super();
    this.elements = {};
  }
  applyEventHandlers() {
    const button = document.getElementById('testbtn');
    button.addEventListener('click', callBack);
  }
  render() {
    this.buildNav();
    this.buildHero();
  }
  clearPage() {
    while (document.body.firstChild) document.body.firstChild.remove();
  }
  buildHero() {
    const main = document.querySelector('main');
    const section = super.create(
      'section',
      'h-[calc(100vh-76px)]',
      'hero-bg',
      'flex',
      'justify-center',
      'items-center'
    );
    const container = super.create(
      'div',
      'wrapped',
      'text-slate-50',
      'text-center'
    );
    const heroHeader = super.create(
      'h1',
      'text-5xl',
      'mb-6',
      'md:text-6xl',
      'lg:text-7xl'
    );
    heroHeader.textContent = 'We love food. We think you will too.';
    const subtext = super.create('h2', 'text-lg');
    subtext.textContent = "Fall in love with food again at Jude's";
    container.append(heroHeader, subtext);
    section.append(container);
    main.append(section);
  }
  buildNav() {
    // TODO TEMP VAR
    const navItems = ['home', 'menu', 'contact'];
    //
    const brandName = document.querySelector('[data-label="Brand Name"]');
    const brandLocation = document.querySelector('[data-label="City"]');
    const navList = document.querySelector('[data-label="Menu"]');
    const navToggle = document.getElementById('navtoggle');
    navToggle.addEventListener('click', this.toggleNav);

    brandName.textContent = "Jude's";
    brandLocation.textContent = 'Liverpool';
    navItems.forEach((item) => {
      const listItem = super.create('li', 'w-full', 'text-center');
      const link = super.create('a', 'nav-link', 'md:py-6');
      link.textContent = `${item}`;
      listItem.append(link);
      navList.append(listItem);
    });
  }
  toggleNav() {
    const navButton = document.getElementById('navtoggle');
    const navList = document.querySelector('[data-label="Menu"]');
    navList.hasAttribute('data-visible')
      ? navButton.setAttribute('aria-expanded', false)
      : navButton.setAttribute('aria-expanded', true);
    navList.classList.toggle('hidden');
    navList.toggleAttribute('data-visible');
  }

  // // content builders
  // buildGallery() {}
  // buildReviews() {}
  // buildMenu() {}
  // buildContact() {}

  // // footer
  // buildFoot() {}
}
