'use: strict';

export default class Model {
  constructor() {
    this.nav = ['home', 'menu', 'contact'];
    this.business = {
      name: "Jude's",
      address: {
        street: null,
        city: null,
        postcode: null,
      },
      phone: null,
      email: null,
    };
    this.menu = {
      breakfast: [],
      lunch: [],
      dinner: [],
    };
  }
}
