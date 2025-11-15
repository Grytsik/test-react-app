import bg1 from 'img/bg-1.webp';
import bg2 from 'img/bg-2.webp';
import bg3 from 'img/bg-3.webp';
import bg4 from 'img/bg-4.webp';
import cartIcon from 'img/icon-burger.svg';


export const linkConfig = [
    {
      id: 1,
      href: '#',
      className: 'nav__link',
      text: 'Home',
    },
    {
      id:2,
      href: '#',
      className: 'nav__link',
      text: 'Product',
    },
    {
      id:3,
      href: '#',
      className: 'nav__link nav__link--cart',
      icon: cartIcon,
    },
  ];

export const offerConfig = [
  {
    title: 'Move the borders of reality!',
    className: 'offer__item-large',
    text: `Go on a space adventure - it's possible with us!`,
    text_short: 'Go on a space adventure',
    img: bg1,
  },
  {
    title: 'Space is not just stars and planets',
    text: 'it is a majestic journey to',
    img: bg2,
  },
  {
    title: 'For those who dream of stars',
    text: 'Our offer: make your dream come true',
    img: bg3,
  },
  {
    title: 'Fulfill your fantastic dreams',
    className: 'offer__item-large',
    text: 'Space has never been so close',
    start_visible: true,
    img: bg4,
  },
];

export const readData = [
  {
    title: 'Embark on a space journey',
    text_short: `Travelling into space is one of the most exciting and unforgettable adventures that
                can change your life forever. And if you have ever dreamed of exploring stars,
                planets and galaxies, then our company is ready to help you realize this dream.`,
    text_long: `We offer a unique experience that will allow you to go on a space journey and see
                all the secrets of the universe. We guarantee that every moment in space will be
                filled with incredible impressions, excitement and new discoveries. Our team of
                professionals takes care of your safety and comfort so that you can fully enjoy your
                adventure in space. We offer various options for space excursions.`,
  },
];
