const mongoose = require("mongoose");

const dresseurSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nom requis"],
  },
  age: {
    type: Number,
    required: [true, "agerequis"],
  },
  pokemons: {
    type: [
     {
          type: mongoose.Schema.Types.ObjectId,
          ref: "pokemons",
     }
    ],
    required: [true, "pokemons requis"],
  }
  
});
// on lui donne un model qui serra notre trable et le parametre du schema
const dresseurModel = mongoose.model("dresseurs", dresseurSchema);
module.exports = dresseurModel;
// Notre model qui nous permet des requetes et on l'exporte
