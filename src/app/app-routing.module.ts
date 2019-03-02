import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./auth/auth-guard.service";

const appRountes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full', canActivate: [AuthGuard]},
]
@NgModule({
    imports: [RouterModule.forRoot(appRountes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}