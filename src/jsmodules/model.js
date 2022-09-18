'use: strict';

export default class Model {
  constructor() {
    this.nav = ['home', 'menu', 'contact'];
    this.business = {
      name: "Jude's",
      address: {
        street: '24 Oxton Road',
        town: 'Oxton',
        city: 'Wirral',
        postcode: 'CH41 2QJ',
      },
      phone: '07581147693',
      email: null,
    };
    this.menu = {
      breakfast: [],
      lunch: [],
      dinner: [],
    };
    this.gallery = {
      img1: {
        image: 'gallery-1',
        overlay: null,
      },
    };
  }
}
