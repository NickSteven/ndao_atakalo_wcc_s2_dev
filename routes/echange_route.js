const router = require("express").Router();

const echangeController = require("../controllers/echange_controller");

router.post("/echange", echangeController.creerEchange);
router.get("/echanges", echangeController.getAllEchange);
router.put("/desactive/:id", echangeController.desactiveEchange);

module.exports = router;
