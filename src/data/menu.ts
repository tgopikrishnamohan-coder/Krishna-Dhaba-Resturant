export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  veg: boolean;
  spicy: boolean;
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    blurb: 'Crispy, savoury bites to awaken the palate',
    items: [
      {
        id: 'samosa',
        name: 'Punjabi Samosa Chaat',
        description:
          'Golden fried pastry pockets cradling spiced potatoes and peas, topped with chickpeas, yoghurt, and tangy tamarind chutney.',
        price: 8,
        image: 'https://images.pexels.com/photos/23286188/pexels-photo-23286188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Bestseller', 'Chaat'],
        veg: true,
        spicy: true,
      },
      {
        id: 'paneer-pakora',
        name: 'Paneer Pakora',
        description:
          'Soft cubes of cottage cheese cloaked in a golden gram-flour crust, served with mint-coriander chutney.',
        price: 10,
        image: 'https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Crispy'],
        veg: true,
        spicy: false,
      },
      {
        id: 'kebab-platter',
        name: 'Tandoori Kebab Platter',
        description:
          'A royal assortment of seekh kebabs, paneer tikka, and spiced mushrooms from the clay oven.',
        price: 16,
        image: 'https://images.pexels.com/photos/9738980/pexels-photo-9738980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['From the tandoor'],
        veg: false,
        spicy: true,
        signature: true,
      },
    ],
  },
  {
    id: 'tandoor',
    label: 'From the Tandoor',
    blurb: 'Clay-oven classics kissed by smoke and spice',
    items: [
      {
        id: 'tandoori-chicken',
        name: 'Royal Tandoori Chicken',
        description:
          'Whole leg marinated overnight in yoghurt and a secret blend of twenty spices, charred over charcoal.',
        price: 18,
        image: 'https://images.pexels.com/photos/9609836/pexels-photo-9609836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Signature', 'Charcoal grilled'],
        veg: false,
        spicy: true,
        signature: true,
      },
      {
        id: 'grilled-drumsticks',
        name: 'Achari Drumsticks',
        description:
          'Chicken drumsticks bathed in pickle-spice marinade, grilled till smoky, with lime and green chutney.',
        price: 15,
        image: 'https://images.pexels.com/photos/20371525/pexels-photo-20371525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Spicy'],
        veg: false,
        spicy: true,
      },
      {
        id: 'tandoori-leg',
        name: 'Smoked Tandoori Leg',
        description:
          'A single juicy leg glazed with saffron-yoghurt marinade, charred and rested on a wooden board.',
        price: 17,
        image: 'https://images.pexels.com/photos/36895285/pexels-photo-36895285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Single serve'],
        veg: false,
        spicy: false,
      },
    ],
  },
  {
    id: 'curries',
    label: 'Curries',
    blurb: 'Slow-simmered gravies layered with deep flavour',
    items: [
      {
        id: 'butter-chicken',
        name: 'Makhani Butter Chicken',
        description:
          'Tandoor-roasted chicken folded into a velvety tomato-butter gravy enriched with cream and fenugreek.',
        price: 19,
        image: 'https://images.pexels.com/photos/40262819/pexels-photo-40262819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Signature', 'Mild'],
        veg: false,
        spicy: false,
        signature: true,
      },
      {
        id: 'dum-aloo',
        name: 'Kashmiri Dum Aloo',
        description:
          'Baby potatoes braised in a fragrant red gravy of yoghurt, fennel, and ginger, finished with saffron.',
        price: 14,
        image: 'https://images.pexels.com/photos/33643313/pexels-photo-33643313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Vegetarian'],
        veg: true,
        spicy: true,
      },
      {
        id: 'spicy-curry',
        name: 'Lal Mirch Chicken Curry',
        description:
          'A bold, fiery curry of chicken simmered with crushed red chillies, garlic, and toasted spices.',
        price: 17,
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Fiery'],
        veg: false,
        spicy: true,
      },
    ],
  },
  {
    id: 'biryani',
    label: 'Biryani',
    blurb: 'Royal rice, layered and sealed for dum cooking',
    items: [
      {
        id: 'chicken-biryani',
        name: 'Hyderabadi Chicken Biryani',
        description:
          'Basmati layered with marinated chicken, fried onions, and saffron, sealed and slow-cooked on dum.',
        price: 21,
        image: 'https://images.pexels.com/photos/9609840/pexels-photo-9609840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Signature', 'Dum cooked'],
        veg: false,
        spicy: true,
        signature: true,
      },
      {
        id: 'biryani-saffron',
        name: 'Saffron Pilaf Biryani',
        description:
          'Fragrant basmati studded with peas, cashews, and saffron threads, finished with rose water.',
        price: 16,
        image: 'https://images.pexels.com/photos/12669168/pexels-photo-12669168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Vegetarian'],
        veg: true,
        spicy: false,
      },
      {
        id: 'paneer-biryani',
        name: 'Paneer Tikka Biryani',
        description:
          'Spiced paneer tikka folded into layered basmati with peppers, mint, and biryani masala.',
        price: 18,
        image: 'https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Vegetarian'],
        veg: true,
        spicy: true,
      },
    ],
  },
  {
    id: 'thali',
    label: 'Thali & Breads',
    blurb: 'A complete Indian meal on one platter',
    items: [
      {
        id: 'royal-thali',
        name: 'Royal Vegetarian Thali',
        description:
          'A grand platter of dal, paneer, seasonal sabzi, raita, rice, and fresh breads — a feast on a tray.',
        price: 24,
        image: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Feast', 'Vegetarian'],
        veg: true,
        spicy: false,
        signature: true,
      },
      {
        id: 'navratan-thali',
        name: 'Navratan Thali',
        description:
          'Nine jewels of the kitchen — flatbread, spiced curry, chutney, dal, rice, and more on a wooden plate.',
        price: 26,
        image: 'https://images.pexels.com/photos/37420999/pexels-photo-37420999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Nine dishes'],
        veg: true,
        spicy: true,
      },
      {
        id: 'naan-basket',
        name: 'Tandoor Naan Basket',
        description:
          'A woven basket of freshly baked naan and roti straight from the clay oven, brushed with ghee.',
        price: 7,
        image: 'https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Accompaniment'],
        veg: true,
        spicy: false,
      },
    ],
  },
];

export const galleryImages = [
  'https://images.pexels.com/photos/30748997/pexels-photo-30748997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/20371558/pexels-photo-20371558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/17050759/pexels-photo-17050759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/20408456/pexels-photo-20408456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13823417/pexels-photo-13823417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/12737811/pexels-photo-12737811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const heroSlides = [
  'https://images.pexels.com/photos/9609840/pexels-photo-9609840.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  'https://images.pexels.com/photos/9609836/pexels-photo-9609836.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  'https://images.pexels.com/photos/40262819/pexels-photo-40262819.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  'https://images.pexels.com/photos/30748997/pexels-photo-30748997.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
];

export const dessertImage = 'https://images.pexels.com/photos/9198596/pexels-photo-9198596.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';
export const storyImage = 'https://images.pexels.com/photos/3822749/pexels-photo-3822749.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
export const ambianceImage = 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
