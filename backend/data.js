import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ash',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Animals',
      category: 'toy',
      image: '/images/Animals.jpg',
      countInStock: 10,
      brand: 'Animals',
      description: 'high quality product',
    },
    {
      name: 'Puzzle',
      category: 'toy',
      image: '/images/Puzzle.jpg',
      countInStock: 0,
      brand: 'Puzzle',
      description: 'high quality product',
    },
    {
      name: 'Education',
      category: 'toy',
      image: '/images/Ed.jpg',
      countInStock: 0,
      brand: 'Educational',
      description: 'high quality product',
    },
    {
      name: 'Dolls',
      category: 'toy',
      image: '/images/Doll.jpg',
      countInStock: 0,
      brand: 'Dolls',
      description: 'high quality product',
    },
    {
      name: 'Electronic',
      category: 'toy',
      image: '/images/Elec.jpg',
      countInStock: 0,
      brand: 'Electronic',
      description: 'high quality product',
    },
  ],
};
export default data;
