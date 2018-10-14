import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-posts></app-posts>
  `,
})
export class AppComponent {
  public configAlgolia = {
    ...environment.algolia,
    indexName: 'posts',
    routing: true
  };

  title = 'example-angular-instantsearch';
}
