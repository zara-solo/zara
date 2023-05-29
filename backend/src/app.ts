import express, { Request, Response } from 'express';
const conn=require ('./database')
import bodyParser from 'body-parser';
const app = express();
const cors = require("cors");
const port = 4000;
const router = require("./router/router");
import userRouter from './router/userRouter';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});
app.use("/product", router);
app.use("/auth", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
