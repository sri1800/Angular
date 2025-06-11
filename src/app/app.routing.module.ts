import { Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ErrorComponent } from "./error/error.component";
import { ListToDoComponent } from "./list-to-do/list-to-do.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { authGuard } from "./service/route-guard.service";
import { RegistrationComponent } from "./registration/registration.component";
import { LogoutComponent } from "./logout/logout.component";

const routes:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'todos/:name',component:ListToDoComponent,canActivate:[authGuard]},
    {path:'todos',component:ListToDoComponent,canActivate:[authGuard]},
    {path:'todo/:id',component:TodoComponent,canActivate:[authGuard]},
    {path:'welcome/:name',component:WelcomeComponent,canActivate:[authGuard]},
    {path:'register', component: RegistrationComponent}, 
    {path:'logout', component:LogoutComponent},
    {path:'**',component:ErrorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}