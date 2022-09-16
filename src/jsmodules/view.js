'use: strict';

import Util from './util.js';

export default class View extends Util {
  constructor() {
    this.create = super.create;
    this.elements = {};
  }

  generateElements() {}
  applyEventHandlers() {}
  renderPage() {}
  clearPage() {}

  // header builders
  buildHead() {}
  buildHero() {}
  buildNav() {}

  // content builders
  buildGallery() {}
  buildReviews() {}
  buildMenu() {}
  buildContact() {}

  // footer
  buildFoot() {}
}
