import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';

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
    component:WeaponsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
