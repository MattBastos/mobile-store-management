require('dotenv').config();

module.exports ={
  development: {
    url: process.env.POSTGRES_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  },
  test: {
    dialect: 'postgres'
  },
  production: {
    url: process.env.POSTGRES_URL,
    dialect: 'postgres',
  }
}
