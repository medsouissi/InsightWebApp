const express = require ('express');
const produitsController = require('../controllers/produitsController');
const router = express.Router();



//@route GET && PRODUIT - /PRODUITS/ 
router
.route("/").get(produitsController.getAllProduits).produits(produitsController.createNewProduit);

router.route ("/:id").get(produitsController.getProduitById);

module.exports = router ; 