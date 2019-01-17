import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output()
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Sarmale', 
    'This is simply a test', 
    'https://www.gustos.ro/assets/recipes_images/2013/03/22/195011/tn4_img_7388_1_.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Measdasda',12),
    ]),
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Measdasda',12),
    ]),
    new Recipe('Sarmale', 
    'This is simply a test', 
    'https://www.gustos.ro/assets/recipes_images/2013/03/22/195011/tn4_img_7388_1_.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Measdasda',12),
    ]),
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Measdasda',12),
    ]),
    new Recipe('Sarmale', 
    'This is simply a test', 
    'https://www.gustos.ro/assets/recipes_images/2013/03/22/195011/tn4_img_7388_1_.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Measdasda',12),
    ]),
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Measdasda',12),
    ])
   ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  constructor(private slService: ShoppingListService) { 
    
  }
}
