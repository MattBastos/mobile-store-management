module.exports ={
  development: {
    url: process.env.POSTGRES_URL_NO_SSL,
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
    url: process.env.POSTGRES_URL_NO_SSL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  }
}
