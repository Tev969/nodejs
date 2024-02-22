const dresseurModel = require("../MODELE/dresseurModele");

exports.getDresseur = async (req, res) => {
  try {
    const dresseur = await dresseurModel.find();
    res.json(dresseur);
  } catch (error) {
    res.json(error);
  }
};

exports.updateDresseur = async (req, res) => {
  try {
    let updateDresseur;
    if (req.body.pokemons) {
      updateDresseur = await dresseurModel.updateOne(
        { _id: req.params.id },
        { $push: { pokemons: req.body.pokemons } }
      );
      delete req.body.pokemons
    }
    updateDresseur = await dresseurModel.updateOne({ _id: req.params.id },req.body);
    res.json(updateDresseur);
  } catch (error) {
    res.json(error);
  }
};

exports.postDresseur = async (req, res) => {
  try {
    const newDresseur = new dresseurModel(req.body);
    newDresseur.validateSync();
    await newDresseur.save();
    res.json("Dresseur up");
  } catch (error) {
    res.json(error);
  }
};

exports.deleteDresseur = async (req, res) => {
  try {
    const deleteDresseur = await dresseurModel.deleteOne({
      _id: req.params.id,
    });
    newDresseur.validateSync();
    await newDresseur.save();
    res.json("Dresseur save");
  } catch (error) {
    res.json(error);
  }
};

exports.getDresseurById = async (req, res) => {
  try {
    const dresseurs = await dresseurModel
      .findOne({ _id: req.params.id })
      .populate({
        path: "pokemons",
      });
    res.json(dresseurs);
  } catch (error) {
    res.json(error.message);
  }
};
