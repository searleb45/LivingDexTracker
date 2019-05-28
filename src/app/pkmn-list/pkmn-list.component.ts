import { Component, OnInit } from '@angular/core';

import { PkmnService } from '../pkmn.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.scss']
})
export class PkmnListComponent implements OnInit {

  pkmnList: Pokemon[];

  constructor(
    private pokemonService: PkmnService
  ) { }

  ngOnInit() {
    this.pkmnList = this.pokemonService.getAllPokemon();
  }

}
