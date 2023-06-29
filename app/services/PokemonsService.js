import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api, pokemonApi } from "./AxiosService.js"

class PokemonsService {
  async getActivePokemon(pokemonName) {
    const res = await pokemonApi.get(`pokemon/${pokemonName}`)
    console.log(res.data);

    const foundPokemon = new Pokemon(res.data)
    console.log(foundPokemon);

    AppState.activePokemon = foundPokemon
    console.log(AppState.activePokemon);
  }
  async getPokemon() {
    const res = await pokemonApi.get('pokemon?limit=100000&offset=0')

    AppState.pokemons = res.data.results

    // console.log(AppState.pokemons);
  }
  async capturePokemon() {
    const capturedPokemon = AppState.activePokemon
    const res = await api.post('api/pokemon', capturedPokemon)
    console.log('capturePokemon uploaded', res.data);

  }

}


export const pokemonsService = new PokemonsService()