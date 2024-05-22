import express, { Application } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/product/product.route';
import { orderRoute } from './app/modules/order/order.route';
const app :Application = express();
const port = 3000;

app.use(cors())

app.use(express.json());

app.use('/api', productRoutes);
app.use('/api/orders', orderRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;