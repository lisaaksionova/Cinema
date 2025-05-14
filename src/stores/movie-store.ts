import { makeAutoObservable, runInAction } from "mobx";
import { Movie } from "../models/movie";

class MovieStore {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
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
        this.filteredMovies = this.movies; // Initialize filteredMovies with all movies
      this.currentMovie = this.filteredMovies[0] || null; // Set the first movie as the current movie
    } catch (error) {
      console.error("Failed to load movies:", error);
    }
  }

  filterMovies = (searchTerm: string) => {
    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.currentMovie = this.filteredMovies[0] || null; // Set the first movie from the filtered list as the current movie
  }

  getMovies = () => {
    return this.movies;
  }

  getMovieCount = () =>  {
    return this.movies.length;
  }

  getMovieByIndex = (index: number) => {
    return this.movies[index] || null;
  }

}

export default new MovieStore();