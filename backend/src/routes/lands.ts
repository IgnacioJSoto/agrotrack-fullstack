import { Router } from 'express';

const router = Router();

const lands = [
  {
    id: 1,
    name: 'Predio Norte',
    location: 'Santiago',
    area: 12.5,
    crop: 'Tomate',
    status: 'active'
  },
  {
    id: 2,
    name: 'Predio Sur',
    location: 'Rancagua',
    area: 8.3,
    crop: 'Maíz',
    status: 'active'
  }
];

router.get('/', (req, res) => {
  res.json(lands);
});

router.post('/', (req, res) => {
  const { name, location, area, crop, status } = req.body;

  const newLand = {
    id: lands.length + 1,
    name,
    location,
    area,
    crop,
    status: status || 'active'
  };

  lands.push(newLand);

  res.status(201).json(newLand);
});

export default router;
