import { Injectable } from "@angular/core";
import movies from "../../sample-movies";



@Injectable()
export class Cinemamovies {
 
  Movies:Array<any>=movies;
  getMovies() {
    return this.Movies;
  }
  getMovie(id) {
    return this.Movies.filter(m=> m.id == id) [0]
  }

  constructor() {}

  
}
