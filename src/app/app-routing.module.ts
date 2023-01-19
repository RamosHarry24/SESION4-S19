import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { GuardianGuard } from './tanque/guardian.guard';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent  
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'weapons',
    component:WeaponsComponent,
    canActivate: [GuardianGuard]

  },
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'users', 
    component:UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
