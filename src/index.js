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

  initialise() {
    this.view.render();
  }
}

const controller = new Controller();
