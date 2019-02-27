import { Injectable } from '@angular/core';

import { Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
          'Pasta con pesto',
          'Italia Food',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/PastaWithPesto.JPG/800px-PastaWithPesto.JPG',
          [
            new Ingredient('Pasta', 1),
            new Ingredient('Pesto', 1)
          ]),
        new Recipe(
            'Palak Paneer',
            'Indian Food',
            'https://c1.staticflickr.com/8/7096/7167011827_67a99f5c03_b.jpg',
            [
              new Ingredient('Spinach', 1),
              new Ingredient('Cheese', 4)
          ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
         this.recipes[index] = newRecipe;
         this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
 