require('dotenv').config();

const config = {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
};

if (process.env.NODE_ENV !== 'development') {
  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

module.exports = config;
