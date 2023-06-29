import { AppState } from "../AppState.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPokemonList() {

  let template = ``

  AppState.pokemons.forEach(pokemon => {
    template += `            <li onclick="app.PokemonsController.getActivePokemon('${pokemon.name}')" class="py-2 fs-2 selectable">${pokemon.name}</li>
    `
  })

  setHTML('pokemonList', template)

}

function _drawActivePokemon() {
  const activePokemon = AppState.activePokemon

  let activePokemonElem = document.getElementById('activePokemon')

  // @ts-ignore
  activePokemonElem.innerHTML = activePokemon.activePokemonTemplate

}

export class PokemonsController {
  constructor() {
    console.log('not my poke');
    this.getPokemon()
    _drawPokemonList()
    AppState.on('pokemons', _drawPokemonList)
    AppState.on('activePokemon', _drawActivePokemon)
  }




  async getPokemon() {
    try {
      await pokemonsService.getPokemon()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

  async getActivePokemon(pokemonName) {
    try {
      await pokemonsService.getActivePokemon(pokemonName)
    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }
  }

  async capturePokemon() {
    try {
      await pokemonsService.capturePokemon()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }
}