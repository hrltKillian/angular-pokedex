import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  url = 'https://pokeapi.co/api/v2/pokemon/';
  firstGenPokemon: any[] = [];

  ngOnInit() {
    this.firstGenPokemon = [];
    for (let i = 1; i <= 151; i++) {
      fetch(this.url + `${i}`)
        .then((response) => response.json())
        .then((data) => {
          this.firstGenPokemon.push(data);
        });
    }
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
      pokemon.types.some((t:any) => t.type.name === type)
    );
  }

  getPokemonHeightMoreThan(height: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.height > height
    );
  }

  getPokemonHeightLessThan(height: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.height < height
    );
  }

  getPokemonWeightLessThan(weight: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.weight < weight
    );
  }

  getPokemonWeightMoreThan(weight: number) {
    return this.firstGenPokemon.filter(
      (pokemon) => pokemon.weight > weight
    );
  }
}
