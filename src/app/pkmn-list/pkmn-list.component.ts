import { Component, OnInit } from '@angular/core';

import { PkmnService } from '../pkmn.service';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.scss']
})
export class PkmnListComponent implements OnInit {

  pkmnList: any[];
  page: number = 0;

  constructor(
    private pokemonService: PkmnService
  ) {}

  ngOnInit() {
    this.pkmnList = [];
    this.loadNextPage();
  }

  onScroll() {
    this.loadNextPage();
  }

  loadNextPage() {
    // Retrieve next 32 Pokemon to display
    this.pokemonService.getPokemonPage(this.page).subscribe((response) => {
      this.pkmnList = this.pkmnList.concat(response);
    });
    this.page++;
  }
}
