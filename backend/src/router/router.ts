const express = require("express");
const router = express.Router();
const { getAll,getAllWomenProducts ,getAllmenProducts,getOneProductById,getAllkidsProducts } = require("../controller/ProductWoman");

router.get("/collection", getAll);
router.get("/women", getAllWomenProducts);
router.get("/men", getAllmenProducts);
router.get("/OneProduct/:id", getOneProductById);
router.get("/kids", getAllkidsProducts);
module.exports = router;