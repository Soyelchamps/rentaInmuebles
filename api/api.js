import express from "express";
import morgan from "morgan";

import userRouter from "./routes/userRouter.js";
import authRoutes from "./routes/authRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";
import propertiesRoutes from "./routes/propertiesRoutes.js";

const api = express();

api.use(morgan("combined"));

api.use(express.json());

api.get("/status", (_, res) => {
  res.json({
    msg: "API En linea funcionado",
    envs: process.env,
  });
});

api.use("/auth", authRoutes);
api.use("/properties", propertiesRoutes);
api.use("/messages", messagesRoutes);
api.use("/users", userRouter);

export default api;
