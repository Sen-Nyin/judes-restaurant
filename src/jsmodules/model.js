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
      headline: "What's on the menu?",
      menus: [
        {
          name: 'Cheese Burger',
          desc: 'A juicy cheese burger made with cheddar cheese, 100% beef, topped with fresh mayonaise and encased in a toasted briosche bun',
          price: '£5.00',
          image: 'gallery-3.jpg',
        },
      ],
    };
    this.home = {
      hero: {
        headline: 'We love food. We think you will too.',
        subtext: 'Fall in love with food again',
      },
      gallery: {
        headline: 'Check out our grub...',
      },
    };
  }
}
