import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Subject: string | undefined;

  filterResultDataSet = [
    {
      Tiltle: 'voices'
    },
    {
      Tiltle: 'writings'
    },
    {
      Tiltle: 'images'
    },
    {
      Tiltle: 'articles'
    },
    {
      Tiltle: 'contacts'
    },
    {
      Tiltle: 'history'
    },
    {
      Tiltle: 'videos'
    }
  ]


}
