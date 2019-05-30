import { Component, OnInit, Input } from '@angular/core';

import { PkmnService } from '../pkmn.service';

@Component({
  selector: 'app-pkmn-list-item',
  templateUrl: './pkmn-list-item.component.html',
  styleUrls: ['./pkmn-list-item.component.scss']
})
export class PkmnListItemComponent implements OnInit {
  @Input() pokemonName: string;

  private pokemonData: any;
  private speciesData: any;
  private pokemonLoaded: boolean = false;

  constructor(private pokemonService: PkmnService) { }

  ngOnInit() {
    // Retrieve Pokemon entry for each new Pokemon to display
    this.pokemonService.getPokemon(this.pokemonName).subscribe(fullResponse => {
      this.pokemonData = fullResponse;

      // Retrieve Pokemon Species entry for each new Pokemon to display.
      // Use AssetByUrl to avoid trying to retrieve a species that doesn't exist (for multiple forms/megas/regionals/etc)
      this.pokemonService.getApiAssetByUrl(fullResponse.species.url).subscribe(speciesResponse => {
        this.speciesData = speciesResponse;

        // TODO Remove debug log
        if(this.pokemonName==='bulbasaur') console.log(this.pokemonData, this.speciesData);

        this.pokemonLoaded = true;
      })
    });
  }

  getPokemonName() {
    if(this.speciesData) {
      return this.speciesData.names.find(name => name.language.name === 'en').name;
    } else if(this.pokemonData) {
      return this.pokemonData.name;
    }
    return 'NAME NOT FOUND';
  }

}
