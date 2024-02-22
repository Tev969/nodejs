const dresseurRouter = require('express').Router()
const dresseurController = require("../CONTROLLER/dresseurController")



dresseurRouter.put("/dresseurs/:id" , dresseurController.updateDresseur)
dresseurRouter.post("/dresseurs", dresseurController.postDresseur)
dresseurRouter.delete("/dresseurs/:id", dresseurController.deleteDresseur)
dresseurRouter.get("/dresseurs" , dresseurController.getDresseur)
dresseurRouter.get("/dresseurs/:id", dresseurController.getDresseurById)
module.exports = dresseurRouter

