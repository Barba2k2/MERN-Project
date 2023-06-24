import express from "express";
import conncetDatabase from "./database/database.js";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

conncetDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));
