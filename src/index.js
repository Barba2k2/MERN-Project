import express from "express";
import conncetDatabase from "./database/database.js";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import newsRoute from "./routes/news.route.js";
import swaggerRoute from "./routes/swagger.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

conncetDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.use("/doc", swaggerRoute)

app.listen(port, () => console.log(`Server running on port: ${port}`));
