import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
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
        return this.http.put('https://ng-recipe-book-5e9bf.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
        {
            observe: 'body',
            params: new HttpParams().set('auth', token)
        });
    }

    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get<Recipe[]>('https://ng-recipe-book-5e9bf.firebaseio.com/recipes.json',
        {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams().set('auth', token)
        })
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