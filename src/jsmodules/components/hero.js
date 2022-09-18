'use: strict';

import Util from '../util.js';
export default class Hero extends Util {
  build() {
    const main = document.querySelector('main');
    const section = super.create(
      'section',
      //   'h-[calc(100vh-108px)]',
      'hero-bg',
      'flex',
      'justify-center',
      'items-center',
      'py-52'
      //   'h-full'
    );
    section.id = 'hero';
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
    const cta = super.create(
      'button',
      'btn',
      'text-slate-50',
      'bg-teal-500',
      'hover:bg-teal-600'
    );
    cta.textContent = 'View Menu';
    cta.id = 'cta';
    cta.dataset.target = 'menu';
    container.append(heroHeader, subtext, cta);
    section.append(container);
    main.prepend(section);
  }
}
