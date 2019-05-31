import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { Pokedex } from 'pokeapi-js-wrapper';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  getPokemonDetails(name: string) : Observable<any> {
    return from(
      this.pokeApi.getPokemonByName(name).then(async (pokemon) => {
        let retVal: any = {
          name: name,
          pokemonData: pokemon,
          speciesData: null
        };

        retVal.speciesData = await this.pokeApi.resource(pokemon.species.url);

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
