import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pkmn-list-item',
  templateUrl: './pkmn-list-item.component.html',
  styleUrls: ['./pkmn-list-item.component.scss']
})
export class PkmnListItemComponent implements OnInit {
  @Input() pkmn: Pokemon;

  constructor() { }

  ngOnInit() {
    console.log(this.pkmn);
  }

}
