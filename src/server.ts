import express from "express"
import cors from 'cors'
import {routes} from './routes'
import { appendFile } from "fs";

const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}))
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running');
})