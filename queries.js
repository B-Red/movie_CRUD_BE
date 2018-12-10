const database = require('./database-connection')

module.exports = {
    //returns whole table.
    listAll(){
        return database('movies')
    },
    //returns a single entity by 'id'
    getById(id){
        return database('movies').where('id', id)
    },
    //another way to get a single entity by 'id'
    getById2(id){
        return database('movies').where({ id : id }).first()
    },
    //Creates a new entity, and then returns whole table
    createMovie(newMovie){
        return database('movies').insert(newMovie).returning('*')
    },
    //Delete and entity
    deleteStudent(id){
        return database('movies').where('id', id).delete()
    },
    //updates an entity
    updateMovie(id, movie){
        return database('movies').where('id', id).update(movie).returning('*')
    }

}