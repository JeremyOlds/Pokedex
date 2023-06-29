import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js"


class MyPokemonsService {
  async getMyPokemon() {
    if (!AppState.account) {
      return
    }

    const res = await api.get('api/pokemon')
    // console.log(res.data);

    const capturedPokemon = res.data.map(pokemon => new Pokemon(pokemon))
    // console.log('log of capturedPokemon in MyPokemonService', capturedPokemon);
    AppState.myPokemons = capturedPokemon
    console.log('appstate log of myPokemons', AppState.myPokemons);

  }



}



export const myPokemonsService = new MyPokemonsService()