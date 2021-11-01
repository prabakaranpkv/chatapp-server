import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//import bodyParser from "body-parser";
//components
import Connection from "./database/db.js";
import Routes from "./routes/Route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", Routes);

const PORT = process.env.PORT || 8000;

const MONGODB_URI = process.env.MONGODB_URI;

Connection(MONGODB_URI);

app.listen(PORT, () =>
  console.log(`Server is Running Succuessfully on PORT ${PORT}`)
);
