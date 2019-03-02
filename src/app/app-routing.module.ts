import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from "@angular/router";

import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";

const appRountes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]}
]
@NgModule({
    imports: [RouterModule.forRoot(appRountes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}