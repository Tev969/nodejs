const express = require('express')
const mongoose = require('mongoose');
const pokemonRouter = require('./ROUTER/pokeRouter');
const dresseurRouter = require('./ROUTER/dresseurRouter')
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())
app.use(pokemonRouter)
app.use(dresseurRouter)
app.listen(3001, (err) => {
     if (!err) {
       console.log("Connexion reussit");
     } else {
       console.log("No connexion");
     }
   });
   // Reserver pour la bdd
   mongoose.connect("mongodb://localhost:27017/apiPoke");
   