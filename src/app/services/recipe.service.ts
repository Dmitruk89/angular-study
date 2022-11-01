import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel',
      'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you- need to say?',
      'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
      ]),
  ];
  constructor() { }

  getRecipies() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe{
    return this.recipes.slice()[index];
  }
}
