import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../poke-api.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonDetailComponent, ColorDirective],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  firstGenPokemon: any[] = [];

  constructor(private pokeApiService: PokeApiService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      if (this.firstGenPokemon.length !== 151) {
        if (this.pokeApiService.getFirstGenPokemon().length !== 151) {
          this.pokeApiService.loadFirstGenPokemon();
        }
        this.firstGenPokemon = this.pokeApiService.getFirstGenPokemon();
      }
      console.log('first gen loaded', this.firstGenPokemon);
    }, 1000);
  }

  goToPokemonDetails(id: number) {
    this.router.navigate(['/pokemon/', id]);
  }
}
