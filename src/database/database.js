import mongoose from "mongoose";

const conncetDatabase = () => {
    console.log("Wait connecting to the database...");

    mongoose
        .connect(
            "mongodb+srv://root:root@cluster0.wh8g0b1.mongodb.net/?retryWrites=true&w=majority",
            { useNewUrlParser: true }
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

export default conncetDatabase;
