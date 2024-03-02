module.exports ={
  development: {
    url: 'postgres://default:gNtkYDPm1fo7@ep-lingering-cell-a4qodyig-pooler.us-east-1.aws.neon.tech:5432/verceldb',
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
