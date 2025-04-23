import { makeAutoObservable, runInAction } from "mobx";
import { Movie } from "../models/movie";

class MovieStore {
  movies: Movie[] = [];
  currentMovie: Movie | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectMovie = (id: number) => {
    this.currentMovie = this.movies.find((movie) => movie.id === id) || null; // Find the movie by ID and set it as the current movie
  } 

  loadMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();
      runInAction(() => {
        data.forEach((movie: Movie) => {
          // Check for duplicates
          if (!this.movies.find((t) => t.id === movie.id)) {
            this.movies.push(movie);
          }
        })});
      this.currentMovie = this.movies[0] || null; // Set the first movie as the current movie
    } catch (error) {
      console.error("Failed to load movies:", error);
    }
  }

  getMovies() {
    return this.movies;
  }

  getMovieCount() {
    return 10;
  }

  getMovieByIndex(index: number) {
    return this.movies[index] || null;
  }

}

export default new MovieStore();