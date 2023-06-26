import mongoose from "mongoose";

const conncetDatabase = () => {
  console.log("Wait connecting to the database...");

  mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default conncetDatabase;
