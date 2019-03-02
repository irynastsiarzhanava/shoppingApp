import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators'; 
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService,
        private authService: AuthService) {}
    
    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-5e9bf.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get<Recipe[]>('https://ng-recipe-book-5e9bf.firebaseio.com/recipes.json?auth='+token)
            .pipe(map(
                    (recipes) => {
                        for (let recipe of recipes) {
                            if (!recipe['igredients']) {
                                console.log(recipe);
                                recipe['ingredients'] = [];
                            }
                        }
                        return recipes;
                    }
                )
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
        );
    }
}