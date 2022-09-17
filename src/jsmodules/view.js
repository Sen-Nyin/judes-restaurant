'use: strict';

import Util from './util.js';

export default class View extends Util {
  constructor() {
    super();
    this.elements = {};
  }
  //test element
  buildButton() {
    const button = super.create(
      'button',
      'text-lg',
      'px-8',
      'py-2',
      'm-4',
      'border',
      'rounded-md',
      'bg-black',
      'text-white',
      'hover:bg-blue-800'
    );
    button.textContent = 'Testing';
    button.id = 'testbtn';
    this.elements.button = button;
  }

  generateElements() {
    this.buildButton();
  }
  applyEventHandlers() {
    const button = document.getElementById('testbtn');
    button.addEventListener('click', callBack);
  }
  renderPage() {
    const main = document.querySelector('main');
    main.append(this.elements.button);
  }
  clearPage() {
    while (document.body.firstChild) document.body.firstChild.remove();
  }

  // // header builders
  // buildHead() {}
  // buildHero() {}
  // buildNav() {}

  // // content builders
  // buildGallery() {}
  // buildReviews() {}
  // buildMenu() {}
  // buildContact() {}

  // // footer
  // buildFoot() {}
}
