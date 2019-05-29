import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { Pokedex } from 'pokeapi-js-wrapper';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  private pokeApi;
  private pokemonPerPage: number = 32;

  constructor() {
    this.pokeApi = new Pokedex();
  }

  getPokemonPage(pageNum: number) : Observable<any> {
    return from(this.pokeApi.getPokemonsList({
      limit: this.pokemonPerPage,
      offset: pageNum * this.pokemonPerPage
    }).then(res => res.results));
  }

  getPokemonSpecies(name: string): Observable<any> {
    return from(this.pokeApi.getPokemonSpeciesByName(name));
  }

  getPokemon(name: string): Observable<any>  {
    return from(this.pokeApi.getPokemonByName(name));
  }

  getApiAssetByUrl(url: string): Observable<any> {
    return from(this.pokeApi.resource(url));
  }
}
