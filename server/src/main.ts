import "reflect-metadata";
import express from "express";
import cors from 'cors';
import connection from "./database/database";
import { authRoutes, exerciseRoutes, groupRoutes, recordRoutes, userRoutes } from "./api/routes";

require('dotenv').config()

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);
app.use(exerciseRoutes);
app.use(recordRoutes);
app.use(groupRoutes);

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(process.env.PORT || 3333, () => {
      console.log("Server started on port 3333");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();