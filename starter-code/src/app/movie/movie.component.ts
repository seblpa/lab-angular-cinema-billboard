import { Component, OnInit } from '@angular/core';
import { Cinemamovies } from '../services/cinemamovies';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: number;
  actualMovie: any;

  constructor(public router: ActivatedRoute, private movies: Cinemamovies, public redirect: Router) { 
    this.router.params.subscribe(p => this.id = p.id);
    this.actualMovie = this.movies.getMovie(this.id);
  }

  ngOnInit() {
  }

}
