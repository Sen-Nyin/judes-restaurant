'use: strict';

import Nav from './components/nav.js';
import Hero from './components/hero.js';
import Gallery from './components/gallery.js';
import Util from './util.js';
import sprite from '../assets/sprite.svg';

export default class View extends Util {
  constructor() {
    super();
    this.hero = new Hero();
    this.nav = new Nav();
    this.gallery = new Gallery();
  }
  render(page, data) {
    this.clearPage();

    if (page === 'home') {
      this.hero.build();
      this.gallery.build();
    }
  }
  clearPage() {
    const main = document.querySelector('main');
    while (main.firstChild) main.firstChild.remove();
  }
  toggleNav() {
    const navButton = document.getElementById('navtoggle');
    const navList = document.querySelector('[data-label="Menu"]');
    const burgerIcon = document.querySelector('[data-label="burger-icon"]');
    if (navList.hasAttribute('data-visible')) {
      navButton.setAttribute('aria-expanded', false);
      burgerIcon.setAttribute('href', `${sprite}#icon-burger`);
    } else {
      navButton.setAttribute('aria-expanded', true);
      burgerIcon.setAttribute('href', `${sprite}#icon-x`);
    }
    navList.classList.toggle('hidden');
    navList.toggleAttribute('data-visible');
  }

  eventHandlers(func) {
    const navbar = document.getElementById('primary-navigation');
    navbar.addEventListener('click', func);
    const navToggle = document.getElementById('navtoggle');
    navToggle.addEventListener('click', this.toggleNav);
  }

  // // content builders
  // buildGallery() {}
  // buildReviews() {}
  // buildMenu() {}
  // buildContact() {}

  // // footer
  // buildFoot() {}
}
