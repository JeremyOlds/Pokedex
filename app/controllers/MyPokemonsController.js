import { AppState } from "../AppState.js";
import { myPokemonsService } from "../services/MyPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawMyPokemonList() {
  const myPokemon = AppState.myPokemons
  let template = ''

  myPokemon.forEach(pokemon => template += `<li onclick="app.PokemonsController.getActivePokemon('${pokemon.name}')" class="py-2 fs-2 selectable">${pokemon.name}</li>`)

  setHTML('myPokemonList', template)
}

export class MyPokemonsController {
  constructor() {
    _drawMyPokemonList()
    this.getMyPokemon()
    AppState.on('account', this.getMyPokemon)
    AppState.on('myPokemons', _drawMyPokemonList)
  }

  async getMyPokemon() {
    try {
      await myPokemonsService.getMyPokemon()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }
  }

}