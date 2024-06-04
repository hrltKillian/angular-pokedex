import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  firstGenPokemon = this.pokeApiService.getFirstGenPokemon();

  constructor(private pokeApiService: PokeApiService) {}
}
