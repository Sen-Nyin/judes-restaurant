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

  // // header builders
  // buildHead() {}
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
    const heroHeader = super.create('h1', 'text-7xl', 'mb-6');
    heroHeader.textContent = 'We love food. We think you will too.';
    const subtext = super.create('h2', 'text-lg');
    subtext.textContent = "Fall in love with food again at Jude's";
    container.append(heroHeader, subtext);
    section.append(container);
    main.append(section);
  }
  buildNav() {
    const header = document.querySelector('header');
    // temp navlist
    const navItems = ['home', 'menu', 'contact'];
    //
    // container
    const container = super.create(
      'div',
      'wrapped',
      'flex',
      'flex-wrap',
      'justify-between',
      'items-center',
      'text-slate-50'
    );

    //branding
    const brandBox = super.create('div', 'flex', 'flex-col', 'flex-1', 'py-2');
    const brandText = super.create('span', 'font-bold', 'text-3xl');
    brandText.textContent = "Jude's"; // TODO
    const brandLoc = super.create('span', 'font-light', 'text-md');
    brandLoc.textContent = 'Liverpool'; // TODO
    brandBox.append(brandText, brandLoc);
    // burger
    const burger = super.create('button', 'block', 'md:hidden');
    burger.id = 'navtoggle';
    burger.textContent = 'Menu';
    // navbar
    const navbar = super.create('nav', 'w-full', 'md:w-auto');
    const navList = super.create(
      'ul',
      'w-full',
      'md:flex',
      'md:gap-10',
      'justify-between',
      'w-full',
      'hidden',
      'md:block'
    );
    navList.id = 'navList';
    navItems.forEach((item) => {
      const listItem = super.create('li', 'w-full', 'text-center');
      const link = super.create('a', 'nav-link', 'md:py-6');
      link.textContent = `${item}`;
      listItem.append(link);
      navList.append(listItem);
    });
    navbar.append(navList);
    burger.addEventListener('click', this.toggleNav);
    container.append(brandBox, burger, navbar);
    header.append(container);
  }
  toggleNav() {
    const navButton = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    navList.classList.toggle('hidden');
  }

  // // content builders
  // buildGallery() {}
  // buildReviews() {}
  // buildMenu() {}
  // buildContact() {}

  // // footer
  // buildFoot() {}
}
