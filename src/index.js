'use: strict';

import './styles.css';
import View from './jsmodules/view.js';
import Model from './jsmodules/model.js';

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.initialise();
  }
  handleClick() {
    return function (e) {
      if (!e.target.classList.contains('nav-link')) return;

      const target = e.target.dataset.target;
      this.view.render(target, this.model);
    };
  }

  initialise() {
    this.view.render('home', this.model);
    this.view.nav.build(
      this.model.nav,
      this.model.business.name,
      this.model.business.address.city
    );
    this.view.eventHandlers(this.handleClick().bind(this));
  }
}

const controller = new Controller();
