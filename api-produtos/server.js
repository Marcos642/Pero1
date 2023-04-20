import express from 'express';
import produtoRoutes from './src/routes/produtoRoutes';
import './src/database';

const env = require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/produto/', produtoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`click no link: https://localhost:${process.env.PORT}`);
});
