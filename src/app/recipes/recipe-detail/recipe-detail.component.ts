import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];
    // const recipes = this.recipeService.getRecipies();
    // this.recipe = recipes[this.id];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addRecipeIngredients(ingredients);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
