module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/movie_CRUD'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
