const pokemonRouter = require('express').Router()
const pokemonController = require('../CONTROLLER/pokemonController')


pokemonRouter.get("/pokemons", pokemonController.getPokemon)
pokemonRouter.post("/pokemon" , pokemonController.postPokemon)
pokemonRouter.put("/pokemons/:id", pokemonController.updatePokemon)
pokemonRouter.delete("/pokemons/:id")

module.exports = pokemonRouter