import express from "express";
import conncetDatabase from "./src/database/database.js";
import userRoute from "./src/routes/user.route.js";

const app = express();
const port = 3000;

conncetDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
