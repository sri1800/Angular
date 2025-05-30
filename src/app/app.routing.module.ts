import { Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ErrorComponent } from "./error/error.component";
import { ListToDoComponent } from "./list-to-do/list-to-do.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'todo/:name',component:ListToDoComponent},
    {path:'welcome/:name',component:WelcomeComponent},
    {path:'**',component:ErrorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}