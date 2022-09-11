const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const echangeController = require("../controllers/echange_controller");

router.post(
  "/echange",
  upload.single("photos"),
  echangeController.creerEchange
);
// router.post("/echange", multer().none(), echangeController.creerEchange);
router.get("/echanges", echangeController.getAllEchange);
router.put(
  "/echange/desactivate/:id",
  multer().none(),
  echangeController.desactiveEchange
);

module.exports = router;
