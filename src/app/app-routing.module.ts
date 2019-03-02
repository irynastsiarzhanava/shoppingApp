import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRountes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full', canActivate: [AuthGuard]},
    {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
    
]
@NgModule({
    imports: [RouterModule.forRoot(appRountes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}