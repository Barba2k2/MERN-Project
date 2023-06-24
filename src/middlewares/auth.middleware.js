import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        const parts = authorization.split(" ");

        const [schema, token] = parts;

        if (schema !== "Bearer" || parts.length !== 2 || !authorization) {
            return res.send(401);
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Token Invalid" });
            }

            const user = await userService.findByIdService(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({ message: "Invalid token!" });
            }

            req.userId = user.id;

            return next();
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
