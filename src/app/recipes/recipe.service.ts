import { EventEmitter, Injectable } from '@angular/core';

import { Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
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

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}