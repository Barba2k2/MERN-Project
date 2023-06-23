const express = require("express");
const conncetDatabase = require("./src/database/db");
const userRoute = require("./src/routes/user.routes");

const app = express();
const port = 3000;

conncetDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
