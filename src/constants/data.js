// src/constants/data.js
import images from './images';

const starters = [
  {
    title: 'Paneer Butter Masala',
    price: '₹280',
    tags: 'Paneer | Tomato gravy | Cream | North Indian',
    img: images.paneer,
  },
  {
    title: 'Chole Bhature',
    price: '₹150',
    tags: 'Chickpea curry | Deep fried bhature | Punjabi',
    img: images.chole,
  },
  {
    title: 'Masala Dosa',
    price: '₹120',
    tags: 'Rice crepe | Potato masala | South Indian',
    img: images.dosa,
  },
  {
    title: 'Samosa (2 pcs)',
    price: '₹80',
    tags: 'Potato | Peas | Crispy pastry | Street snack',
    img: images.samosa,
  },
  {
    title: 'Paneer Tikka',
    price: '₹220',
    tags: 'Marinated paneer | Tandoori | Appetizer',
    img: images.tikka,
  },
];

const mainCourses = [
  {
    title: 'Veg Biryani (Full)',
    price: '₹320',
    tags: 'Basmati | Spices | Dum style | Hyderabadi',
    img: images.biryani,
  },
  {
    title: 'Butter Naan (2pcs)',
    price: '₹60',
    tags: 'Tandoor baked | Butter | Bread',
    img: images.naan,
  },

  {
    title: 'Dal Makhani',
    price: '₹180',
    tags: 'Black lentils | Creamy | Punjabi dal',
    img: images.dal,
  },
  {
    title: 'Gulab Jamun (2 pcs)',
    price: '₹90',
    tags: 'Milk dumplings | Sugar syrup | Dessert',
    img: images.jamun,
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Times Food Award',
    subtitle: 'Best Indian Restaurant (2024)',
  },
  {
    imgUrl: images.award01,
    title: 'Best Local Eatery',
    subtitle: 'Voted by food critics',
  },
  {
    imgUrl: images.award05,
    title: 'Top 10 Biryani',
    subtitle: 'Regional excellence award',
  },
  {
    imgUrl: images.award03,
    title: 'Chef\'s Excellence',
    subtitle: 'Outstanding culinary skill',
  },
];

export default { starters, mainCourses, awards };
