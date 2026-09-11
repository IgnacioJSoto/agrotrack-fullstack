import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'AgroTrack API',
    status: 'running'
  });
});

app.listen(PORT, () => {
  console.log(`AgroTrack API running on port ${PORT}`);
});
