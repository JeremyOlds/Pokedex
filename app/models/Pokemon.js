import { generateId } from "../utils/generateId.js"

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || ''
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.id = data.id || generateId()
  }

  get activePokemonTemplate() {
    return `
    <img class="img-adjust"
                src="${this.img}"
                alt="Pokemon Image :D">
              <div class="text-center">
                <h2>${this.name}</h2>
                <h4>${this.nickName}</h4>
                <h4>Weight: ${this.weight}</h4>
                <h4>Height: ${this.height}</h4>
                <h4> Type: ${this.computeTypeList}</h4>
                <button onclick="app.PokemonsController.capturePokemon()" class="btn btn-success"> Capture</button>
              </div>
  `
  }

  get myActivePokemonTemplate() {
    return `
    <img class="img-adjust"
    src="${this.img}"
    alt="Pokemon Image :D">
  <div class="text-center">
    <h2>${this.name}</h2>
    <h4>${this.nickName}</h4>
    <h4>Weight: ${this.weight}</h4>
    <h4>Height: ${this.height}</h4>
    <h4> Type: ${this.computeTypeList}</h4>
  </div>
    `
  }

  get computeTypeList() {
    let typeString = ''

    this.types.forEach(type => {
      typeString += ' ' + type.type.name
    });

    return typeString
  }


}