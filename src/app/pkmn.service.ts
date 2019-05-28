import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

const POKEMON: Pokemon[] = [
  {
    name: "Bulbasaur",
    nationalDexNum: 1,
    type1: "Grass",
    type2: "Poison"
  },
  {
    name: "Charmander",
    nationalDexNum: 4,
    type1: "Fire"
  },
  {
    name: "Squirtle",
    nationalDexNum: 7,
    type1: "Water"
  },
  {
    name: "Pikachu",
    nationalDexNum: 25,
    type1: "Electric"
  }
];

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  constructor() { }

  getPokemon(num: number): Pokemon | string {
    return POKEMON[num] || `Pokemon ${num} not found in dataset`;
  }

  getAllPokemon() {
    return POKEMON;
  }
}
