const express = require("express")
const router = express.Router()

const WebController = require("../controllers/Web/Produto");


router.get("/produtos", WebController.index);
router.post("/produtos", WebController.create);
router.put("/produtos/:id", WebController.update);
router.delete("/produtos/:id", WebController.delete);
router.get("/produto/:id", WebController.indexOne);

module.exports = router