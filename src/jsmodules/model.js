'use: strict';
import menu1 from '../assets/gallery-1.jpg';
import menu2 from '../assets/gallery-2.jpg';
import menu3 from '../assets/gallery-3.jpg';
import menu4 from '../assets/gallery-4.jpg';
import menu5 from '../assets/gallery-5.jpg';
import menu6 from '../assets/gallery-6.jpg';
import menu7 from '../assets/gallery-7.jpg';
import menu8 from '../assets/gallery-8.jpg';
import menu9 from '../assets/gallery-9.jpg';

export default class Model {
  constructor() {
    this.nav = ['home', 'menu', 'contact'];

    this.name = 'Fairytale Kitchen';
    this.contact = {
      headline: 'Get in touch',
      address: {
        street: '24 The Street',
        town: 'Halfway to Heaven',
        city: 'Paradise',
        postcode: 'TT44 4TT',
      },
      phone: '555-555-5555',
      email: 'email@yoloswaggins.com',
    };
    this.menu = {
      headline: "What's on the menu?",
      menus: [
        {
          name: 'Cheese Burger',
          desc: 'A juicy cheese burger made with cheddar cheese, 100% beef, topped with fresh mayonaise and encased in a toasted brioche bun',
          price: '£5.00',
          image: menu3,
        },
        {
          name: 'Fat fry up',
          desc: 'Fried everything. No really, everything!',
          price: '£8.00',
          image: menu1,
        },
        {
          name: 'The Green Stuff',
          desc: 'Green things, no meat!',
          price: '£2.00',
          image: menu2,
        },
        {
          name: 'Chunky Monkey Sandwich',
          desc: 'Sandwich for kings!',
          price: '£1.50',
          image: menu4,
        },
        {
          name: 'Small Plates',
          desc: 'Need plates, lots of plates? ',
          price: '£2.00',
          image: menu5,
        },
        {
          name: 'Chicken Burger Meal',
          desc: "Gigantic Chicken Burger! So big. It's so big! Comes with chips and a pint. Perfect.",
          price: '£9.00',
          image: menu6,
        },
        {
          name: 'Double Decker Sandwich',
          desc: 'You need a big mouth for this one! Massive sandwich. Very tasty.',
          price: '£4.00',
          image: menu7,
        },
        {
          name: 'Greedy Pig Buffet',
          desc: 'Lots of food, we wont stop serving until you tell us to!',
          price: '£18.00',
          image: menu8,
        },
        {
          name: 'Homemade Chilli',
          desc: "It's chilli and rice, but who put those vegetables on there?",
          price: '£4.50',
          image: menu9,
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
