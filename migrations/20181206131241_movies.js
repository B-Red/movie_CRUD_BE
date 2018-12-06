
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Movies', (movie) => {
        movie.increments('id')
        movie.string('Title')
        movie.string('Director')
        movie.integer('Year')
        movie.integer('My Rating')
        movie.string('Poster URL')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('Movies')
};
