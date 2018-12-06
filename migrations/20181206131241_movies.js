
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (movie) => {
        movie.increments('id')
        movie.string('Title')
        movie.string('Director')
        movie.integer('Year')
        movie.integer('My_Rating')
        movie.string('Poster_URL')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};
