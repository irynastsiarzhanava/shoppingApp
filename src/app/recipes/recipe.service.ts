import { EventEmitter } from '@angular/core';

import { Recipe} from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe 1',
          'Test Description 1',
          'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
          new Recipe(
            'A Test Recipe 2',
            'Test Description 2',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
          
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}