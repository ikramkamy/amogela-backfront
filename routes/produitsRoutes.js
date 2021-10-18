const express=require('express');
const router=express.Router();
const {addproduit,getproduit,findbycategorie,getproduitByID,Delete}=require('../controllers/produitSsController');
router.post('/addproduits',addproduit);
router.get('/api/produitsStock',getproduit)
router.get('/findbycategorie/:cathegorie',findbycategorie)
router.get('/getproduitByID/:_id',getproduitByID)
router.delete('/deleteProduits/:_id',Delete);
module.exports = router;