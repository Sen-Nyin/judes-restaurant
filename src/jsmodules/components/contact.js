'use: strict';

import Util from '../util.js';
export default class Contact extends Util {
  build(data) {
    console.log(data);
    const main = document.querySelector('main');
    const section = super.create('section', 'py-24');
    const container = super.create('div', 'wrapped');
    const detailsWrap = super.create(
      'div',
      'flex',
      'flex-col',
      'md:flex-row',
      'items-center',
      'gap-4',
      'w-full',
      'mt-20'
    );
    const heading = super.create('h1', 'section-header');
    heading.textContent = `${data.headline}`;
    const address = super.create('address', 'w-full', 'text-center', 'text-xl');
    const addrList = super.create('ul');

    for (const key of Object.keys(data.address)) {
      const listItem = super.create('li');
      listItem.textContent = `${data.address[key]}`;
      addrList.append(listItem);
    }
    const phone = super.create('li');
    const phoneLink = super.create(
      'a',
      'text-teal-500',
      'font-bold',
      'hover:text-teal-400'
    );
    phoneLink.textContent = `${data.phone}`;
    phoneLink.href = `tel:${data.phone}`;
    const email = super.create('li');
    const emailLink = super.create(
      'a',
      'text-teal-500',
      'font-bold',
      'hover:text-teal-400'
    );
    emailLink.textContent = `${data.email}`;
    emailLink.href = `mailto:${data.email}`;

    phone.append(phoneLink);
    email.append(emailLink);
    addrList.append(phone, email);

    const map = super.create(
      'div',
      'h-80',
      'w-full',
      'rounded-lg',
      'shadow-lg',
      'overflow-hidden'
    );
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76100.77595872684!2d-2.986097773234042!3d53.412156912035236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool!5e0!3m2!1sen!2suk!4v1663609132083!5m2!1sen!2suk" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    address.append(addrList);
    detailsWrap.append(address, map);
    container.append(heading, detailsWrap);
    section.append(container);
    main.append(section);
  }
}
