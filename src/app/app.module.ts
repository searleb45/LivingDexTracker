import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmnListComponent } from './pkmn-list/pkmn-list.component';
import { PkmnDetailComponent } from './pkmn-detail/pkmn-detail.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PkmnListItemComponent } from './pkmn-list-item/pkmn-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PkmnListComponent,
    PkmnDetailComponent,
    HomeComponent,
    SiteHeaderComponent,
    PkmnListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
