import { rest } from 'msw';

const handlers = [
  rest.get('http://localhost:5000/products', (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: 'America',
          imagePath: '/images/america.jpeg',
        },
        {
          name: 'England',
          imagePath: 'images/england.jpeg',
        },
      ])
    )
  ),
  rest.get('http://localhost:5000/options', (req, res, ctx) =>
    res(ctx.json([{ name: 'Insurance' }, { name: 'Dinner' }]))
  ),
  rest.post('http://localhost:5000/order', (req, res, ctx) =>
    res(
      ctx.json([
        {
          orderNumber: 13123123123,
          price: 2000,
        },
      ])
    )
  ),
];

export default handlers;
