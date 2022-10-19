import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  name = 'Dimon';
  pageName = 'recipes';

  navigate(event: string){
    this.pageName = event;
  }
}
