import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MyPokemonsController } from "./controllers/MyPokemonsController.js";
import { PokemonsController } from "./controllers/PokemonsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { MyPokemonView } from "./views/MyPokemonView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: PokemonsController,
    view: /*html*/`  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-3">
        <h2>Pokemon List</h2>
        <ul id="pokemonList" class="list-adjust">
        </ul>
      </div>
      <div class="col-9 d-flex justify-content-center">
        <div id="activePokemon">

        </div>

      </div>
    </div>


  </div>`
  },
  {
    path: '#/myPokemon',
    controller: MyPokemonsController,
    view: MyPokemonView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */