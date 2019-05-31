import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { Pokedex } from 'pokeapi-js-wrapper';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  private pokeApi;
  private dataCache = {};
  private pokemonPerPage: number = 32;

  constructor() {
    this.pokeApi = new Pokedex();
  }

  getPokemonPage(pageNum: number) : Observable<any> {
    return from(this.pokeApi.getPokemonSpeciesList({
      limit: this.pokemonPerPage,
      offset: pageNum * this.pokemonPerPage
    }).then(res => res.results));
  }

  getPokemonDetails(name: string) : Observable<any> {
    // Return cached data instead of making a service call
    if(this.dataCache[name]) {
      return of(this.dataCache[name]);
    }

    return from(
      // Retrieve species information
      this.pokeApi.getPokemonSpeciesByName(name).then(async (species) => {
        let retVal: any = {
          name: name,
          pokemonData: null,
          speciesData: species
        };

        // Retrieve Pokemon information
        // Filter by is_default to avoid pulling multiple forms (Deoxys-A vs Deoxys-N)
        retVal.pokemonData = await this.pokeApi.resource(species.varieties.find(variety => variety.is_default).pokemon.url);

        // Cache result for future calls
        this.dataCache[name] = retVal;

        return retVal;
      })
    );
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
