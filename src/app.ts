import express, { Application } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/product/product.route';
const app :Application = express();
const port = 3000;

app.use(cors())

app.use(express.json());

app.use('/api/products',productRoutes )

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;