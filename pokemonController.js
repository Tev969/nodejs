const pokemonModel = require("../MODELE/pokeModele");
const dresseurModel = require("../MODELE/dresseurModele");

exports.postPokemon = async (req, res) => {
  try {
    const dresseur = dresseurModel.findOne({ _id: req.params.idDresseur });
    if (dresseur) {
      const newPokemon = new pokemonModel(req.body);
      newPokemon.validateSync();
      await newPokemon.save();
      await dresseurModel.updateOne(
        { _id: req.params.idDresseur },
        { $push: { pokemons: newPokemon._id } }
      );

      console.log();
      res.json("Votre pokemon est ajouté");
    } else {
      res.json("None poke");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

exports.getPokemon = async (req, res) => {
  try {
    const getPokemon = await pokemonModel.find();
    res.json(getPokemon);
  } catch (error) {
    res.json(error);
  }
};

exports.updatePokemon = async (req, res) => {
  try {
    const updatePokemon = await pokemonModel.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.json("pokemon mis a jour !");
  } catch (error) {
    res.json(error);
  }
};

exports.deletePokemon = async (req, res) => {
  try {
    const deletePokemon = await recipeModel.deleteOne(
      { _id: req.params.id },
      req.body
    );
    res.json(deletePokemon);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
