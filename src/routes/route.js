const express =require("express");
const router=express.Router();

const cardController =require("../controllers/businesscardController");


 router.post("/businessCard",cardController.createBusinessCard)
router.get("/getCardById/:id",cardController.getBusinessCard)

module.exports=router;