import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmnListComponent } from './pkmn-list/pkmn-list.component';
import { PkmnDetailComponent } from './pkmn-detail/pkmn-detail.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PkmnListItemComponent } from './pkmn-list-item/pkmn-list-item.component';
import { PkmnService } from './pkmn.service';
import { PokeballLoaderComponent } from './pokeball-loader/pokeball-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PkmnListComponent,
    PkmnDetailComponent,
    HomeComponent,
    SiteHeaderComponent,
    PkmnListItemComponent,
    PokeballLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    PkmnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
