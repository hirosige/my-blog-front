import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public configAlgolia = {
    ...environment.algolia,
    indexName: 'posts',
    routing: true
  };

  constructor() { }

  ngOnInit() {
  }

}
