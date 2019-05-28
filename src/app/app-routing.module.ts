import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PkmnListComponent } from './pkmn-list/pkmn-list.component';
import { PkmnDetailComponent } from './pkmn-detail/pkmn-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pkmnList', component: PkmnListComponent},
  {path: 'pkmn/:id', component: PkmnDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
