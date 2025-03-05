import { error } from "console";
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://monayer42:NO1kzhDRQ74L4xxb@personalfinancetracker.5ar2a.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Failed to connect to MongoDB", error));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
