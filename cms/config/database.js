module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        host: "${process.env.DATABASE_HOST}",
        port: "${process.env.DATABASE_PORT}",
        database: "${process.env.DATABASE_NAME}",
        username: "${process.env.DATABASE_USERNAME}",
        password: "${process.env.DATABASE_PASSWORD}",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});
