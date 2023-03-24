import { Sequelize } from "sequelize-typescript";

require('dotenv').config();

import User from "./models/user";
import Group from "./models/group";
import Participation from "./models/participation";
import Exercise from "./models/exercise";
import Record from "./models/record";

const connection = new Sequelize({
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: true,
    underscored: false,
  },
  models: [User, Group, Participation, Exercise, Record],
});

export default connection;