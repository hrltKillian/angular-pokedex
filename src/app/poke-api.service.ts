import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  url = 'https://pokeapi.co/api/v2/pokemon/';
  urlType = 'https://pokeapi.co/api/v2/type/';
  firstGenPokemon: any[] = [];
  typesRelation: any[] = [];
  typesName: any[] = [];

  constructor() {
    this.loadFirstGenPokemon();
    this.loadTypesName();
    this.loadTypesRelation();
    setTimeout(() => {
      this.typesName = this.typesName.slice(0, 18);
      this.sortByIdFirstGenPokemon();
      console.log('filtered types name');
      setTimeout(() => {
        console.log(this.firstGenPokemon);
        console.log(this.typesName);
        console.log(this.typesRelation);
      }, 500);
    }, 1000);
  }

  loadFirstGenPokemon() {
    this.firstGenPokemon = [];
    for (let i = 1; i <= 151; i++) {
      fetch(this.url + i)
        .then((response) => response.json())
        .then((data) => {
          this.firstGenPokemon.push(data);
        });
    }
    console.log('first gen loaded');
  }

  loadTypesName() {
    this.typesName = [];
    fetch(this.urlType)
      .then((response) => response.json())
      .then((data) => {
        this.typesName = data.results.map((type: any) => type.name);
      });
    console.log('types loaded');
  }

  loadTypesRelation() {
    this.typesRelation = [];
    for (let i = 1; i <= 18; i++) {
      fetch(this.urlType + i)
        .then((response) => response.json())
        .then((data) => {
          this.typesRelation.push(data.damage_relations);
        });
    }
    console.log('relations loaded');
  }

  getTypesRelation() {
    return this.typesRelation;
  }

  getTypesName() {
    return this.typesName;
  }

  sortByIdFirstGenPokemon() {
    this.firstGenPokemon.sort((a, b) => a.id - b.id);
  }

  getFirstGenPokemon() {
    return this.firstGenPokemon;
  }

  getPokemonById(id: number) {
    return this.firstGenPokemon[id - 1];
  }

  getPokemonByName(name: string) {
    return this.firstGenPokemon.find(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
  }

  getPokemonsByFirstLetters(letter: string) {
    return this.firstGenPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(letter.toLowerCase())
    );
  }

  getPokemonsByType(type: string) {
    return this.firstGenPokemon.filter((pokemon) =>
      pokemon.types.some((t: any) => t.type.name === type)
    );
  }

  getPokemonHeightMoreThan(heightInMeter: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.height / 10 > heightInMeter
    );
  }

  getPokemonHeightLessThan(heightInMeter: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.height / 10 < heightInMeter
    );
  }

  getPokemonWeightLessThan(weightInKilo: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.weight / 10 < weightInKilo
    );
  }

  getPokemonWeightMoreThan(weightInKilo: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.weight / 10 > weightInKilo
    );
  }
}
