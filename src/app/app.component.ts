import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public configAlgolia = {
    ...environment.algolia,
    indexName: 'posts',
    routing: true
  };

  title = 'example-angular-instantsearch';
}
