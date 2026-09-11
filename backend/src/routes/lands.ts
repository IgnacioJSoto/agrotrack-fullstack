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

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const land = lands.find((land) => land.id === id);

  if (!land) {
    return res.status(404).json({
      message: 'Land not found'
    });
  }

  res.json(land);
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

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  const landIndex = lands.findIndex((land) => land.id === id);

  if (landIndex === -1) {
    return res.status(404).json({
      message: 'Land not found'
    });
  }

  const { name, location, area, crop, status } = req.body;

  lands[landIndex] = {
    ...lands[landIndex],
    name,
    location,
    area,
    crop,
    status
  };

  res.json(lands[landIndex]);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const landIndex = lands.findIndex((land) => land.id === id);

  if (landIndex === -1) {
    return res.status(404).json({
      message: 'Land not found'
    });
  }

  const deletedLand = lands.splice(landIndex, 1)[0];

  res.json(deletedLand);
});

export default router;