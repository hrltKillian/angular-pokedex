import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
  },
  {
    path: 'pokemon',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/type/:type',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/height/more-than/:height',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/height/less-than/:height',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/weight/less-than/:weight',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/name/:name',
    component: PokemonDetailComponent,
  },
  {
    path: 'pokemon/letter/:letter',
    component: PokemonListComponent,
  },
];
