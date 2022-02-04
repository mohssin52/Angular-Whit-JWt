import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { AfterauthgardsGuard } from './gaurds/afterauthgards.guard';
import { AuthgardsGuard } from './gaurds/authgards.guard';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ArbitreComponent } from './components/arbitre/arbitre.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { AddArbitreComponent } from './components/add-arbitre/add-arbitre.component';
import { EditAritreComponent } from './components/edit-aritre/edit-aritre.component';
import { ListMatchComponent } from './components/list-match/list-match.component';

const routes: Routes = [

{path:"",redirectTo: "/arbitre", pathMatch :"full"},
  {path:"arbitre" ,children:[
    {path:"",component:ArbitreComponent},
    {path:"edit/:arbitreId",component:EditAritreComponent},
    {path:"add",component:AddArbitreComponent},

  ],canActivate:[AuthgardsGuard] },
 // { path: "", redirectTo: "/address", pathMatch: "full"},
 {
  path: "changePass",
   component:ChangePassComponent,
   canActivate: [AuthgardsGuard]
  },

  {path:"login",component:LoginComponent,canActivate:[AfterauthgardsGuard]},

  {path:'regestre',component:RegisterComponent,canActivate:[AfterauthgardsGuard]},
  {path:"**",component:PageNotFoundComponent}
  ,
  {
    path: "match",children:[


      {path:"add",component:AddArbitreComponent},
      {path:"edit/:matchId",component:EditMatchComponent}
    ],canActivate:[AuthgardsGuard] },



];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
