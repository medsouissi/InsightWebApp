const express = require ('express');
const produitsController = require('../controllers/produitsController');
const router = express.Router();



//@route GET && PRODUIT - /PRODUITS/ 
router
.route("/produits").get(produitsController.getAllProduits);

router.route ("/:id").get(produitsController.getProduitById);

module.exports = router ; 