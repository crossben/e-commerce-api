import express, { Application } from "express";
import * as bodyParser from "body-parser";
import { AuthRoute } from "./routes/auth.route";
import { ProductRoute } from "./routes/product.route";
import { CartRoute } from "./routes/cart.route";
import { OrderRoute } from "./routes/order.route";

export const setupRestEndpoint = (app: Application) => {
  const router = express.Router();
  app.use(bodyParser.json());
  app.use("/", router);
  app.use("/", AuthRoute());
  app.use("/", ProductRoute());
  app.use("/", CartRoute());
  app.use("/", OrderRoute());
};
