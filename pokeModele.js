const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nom requis"],
  },
  type: {
    type: [],
    required: [true, "type requisrequis"],
  },
  level: {
    type: Number,
    required: [true, "niveau requis"],
  },
  attack: {
    type: [],
    required: [true, "attaque requis"],
  },
});
// on lui donne un model qui serra notre trable et le parametre du schema
const pokemonModel = mongoose.model("pokemons", pokemonSchema);
module.exports = pokemonModel;
// Notre model qui nous permet des requetes et on l'exporte
