import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeApiService } from '../poke-api.service';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [ColorDirective],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent {
  pokemon: any;
  typesName: any[] = [];
  typesRelation: any[] = [];
  showFullTypeTable = false;
  femaleShinySprite : string = '';
  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokeApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokeApiService.getPokemonById(parseInt(id || '0'));
    setTimeout(() => {
      if (this.typesName.length != 18) {
        if (this.pokeApiService.getTypesName().length != 18) {
          this.pokeApiService.loadTypesName();
        }
        this.typesName = this.pokeApiService.getTypesName();
      }
      if (this.typesRelation.length != 18) {
        if (this.pokeApiService.getTypesRelation().length != 18) {
          this.pokeApiService.loadTypesRelation();
        }
        this.typesRelation = this.pokeApiService.getTypesRelation();
      }
      this.femaleShinySprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/female/'+ id +'.gif';
      console.log(this.typesRelation);
      console.log(this.typesName);
    }, 500);
  }

  goToPokedex() {
    this.router.navigate(['/pokemon']);
  }

  showTypeTable() {
    this.showFullTypeTable = !this.showFullTypeTable;
  }
}
