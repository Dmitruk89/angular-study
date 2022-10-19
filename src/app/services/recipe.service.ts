import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test recipe', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg'),
    new Recipe('Another test Recipe', 'This is a test recipe', 'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg'),
  ];
  constructor() { }

  getRecipies() {
    return this.recipes.slice();
  }
}
