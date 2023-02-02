import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Shane',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John Doe',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Life is Better with music Slim shirt',
      slug: 'life--music-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpeg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Poison Fit Shirt',
      slug: 'poison-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpeg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Skull Pants',
      slug: 'skull-pant',
      category: 'Pants',
      image: '/images/p3.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Ripped fit pants',
      slug: 'fit-pant',
      category: 'Pants',
      image: '/images/p4.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
