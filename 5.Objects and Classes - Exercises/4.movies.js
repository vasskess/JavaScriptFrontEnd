function movies(input) {
  const myMovies = {};

  for (const line of input) {
    if (line.startsWith("addMovie")) {
      const movieTitle = line.slice(9);
      myMovies[movieTitle] = {};
    } else if (line.includes("directedBy")) {
      const [movieTitle, director] = line.split(" directedBy ");
      if (myMovies.hasOwnProperty(movieTitle)) {
        myMovies[movieTitle]["director"] = director;
      }
    } else if (line.includes("onDate")) {
      const [movieTitle, date] = line.split(" onDate ");
      if (myMovies.hasOwnProperty(movieTitle)) {
        myMovies[movieTitle]["date"] = date;
      }
    }
  }

  for (const movieTitle in myMovies) {
    const movieInfo = myMovies[movieTitle];
    if (
      movieInfo.hasOwnProperty("director") &&
      movieInfo.hasOwnProperty("date")
    ) {
      console.log(
        JSON.stringify({
          name: movieTitle,
          director: movieInfo.director,
          date: movieInfo.date,
        })
      );
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
