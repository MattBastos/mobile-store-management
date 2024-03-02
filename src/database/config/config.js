module.exports ={
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  }
}
