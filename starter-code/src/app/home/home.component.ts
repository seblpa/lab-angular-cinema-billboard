import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinemamovies } from '../services/cinemamovies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(public router: Router, private movies: Cinemamovies) { }

  ngOnInit() {
    // console.log(this.movies)
  }
movieList:Array<any> = this.movies.getMovies();
}
