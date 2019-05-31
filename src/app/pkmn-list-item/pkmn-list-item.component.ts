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
    this.pokemonService.getPokemonDetails(this.pokemonName).subscribe((res) => {
      this.pokemonData = res.pokemonData;
      this.speciesData = res.speciesData;
      this.pokemonLoaded = true;
    });
  }

  getPokemonName(): string {
    if(this.speciesData) {
      return this.speciesData.names.find(name => name.language.name === 'en').name;
    } else if(this.pokemonData) {
      return this.pokemonData.name;
    }
    return 'NAME NOT FOUND';
  }

  getPokemonType(slot: number): string {
    let typeEntry = this.pokemonData.types.find(type => type.slot === slot);
    return typeEntry ? typeEntry.type.name : '';
  }

}
