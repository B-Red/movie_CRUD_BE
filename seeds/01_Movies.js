
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
        Title: 'Iron Man', 
        Director: 'Jon Favreau',
        Year: 2008,
        My_Rating: 5,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'The Incredible Hulk', 
        Director: 'Louis Leterrier',
        Year: 2008,
        My_Rating: 1,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Iron Man 2', 
        Director: 'Jon Favreau',
        Year: 2010,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg'
        }, {
        Title: 'Thor', 
        Director: 'Kenneth Branagh',
        Year: 2011,
        My_Rating: 2,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Captain America: The First Avenger', 
        Director: 'Joe Johnston',
        Year: 2011,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg'
        }, {
        Title: 'The Avengers', 
        Director: 'Joss Whedon',
        Year: 2012,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
        }, {
        Title: 'Iron Man 3', 
        Director: 'Shane Black',
        Year: 2013,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg'
        }, {
        Title: 'Thor: The Dark World', 
        Director: 'Alan Taylor',
        Year: 2013,
        My_Rating: 1,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SY1000_SX700_AL_.jpg'
        }, {
        Title: 'Captain America: The Winter Soldier', 
        Director: 'Russo Brothers',
        Year: 2014,
        My_Rating: 3,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SY1000_CR0,0,685,1000_AL_.jpg'
        }, {
        Title: 'Guardians of the Galaxy', 
        Director: 'James Gunn',
        Year: 2014,
        My_Rating: 5,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Avenger: Age of Ultron', 
        Director: 'Joss Whedon',
        Year: 2015,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_SX675_AL_.jpg'
        }, {
        Title: 'Ant Man', 
        Director: 'Peyton Reed',
        Year: 2015,
        My_Rating: 3,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg'
        }, {
        Title: 'Captain America: Civil War', 
        Director: 'Russo Brothers',
        Year: 2016,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Doctor Strange', 
        Director: 'Scott Derrickson',
        Year: 2016,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Guardians of the Galaxy Vol. 2', 
        Director: 'James Gunn',
        Year: 2017,
        My_Rating: 5,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Spider-Man: Homecoming', 
        Director: 'Jon Watts',
        Year: 2017,
        My_Rating: 5,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SY1000_CR0,0,658,1000_AL_.jpg'
        }, {
        Title: 'Thor: Ragnarok', 
        Director: 'Taika Waititi',
        Year: 2017,
        My_Rating: 5,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Black Panther', 
        Director: 'Ryan Coogler',
        Year: 2018,
        My_Rating: 4,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }, {
        Title: 'Avengers: Infinity War', 
        Director: 'Russo Brothers',
        Year: 2018,
        My_Rating: 5,
        Poster_URL: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }
        
      ]);
    });
};
