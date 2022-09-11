const pkg = require("@prisma/client");
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const { echange: Echange } = prisma;

// insert echange
const creerEchange = async (req, res) => {
  var copy = new Array();

  var nom = req.body.nom;
  var contact = req.body.contact;
  var kilalao = req.body.nom_kilalao;
  req.body.photos = req.file.path;
  var atakalo = req.body.atakalo;

  if (nom != "" && kilalao != "" && contact != "" && atakalo != "") {
    if (/^[0-9]+$/.test(contact) && contact.length == 10) {
      await Echange.create({
        data: req.body,
      })
        .then(() => {
          res.status(201).send({
            message: "Echange ajouté !",
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || "Une erreur est survenue !",
          });
        });
    } else {
      return res.status(400).send({
        message: "Format contact non-valide !",
      });
    }
  } else {
    return res.status(400).send({
      message: "Veuillez compléter les champs vides !",
    });
  }
};

// get all echanges
const getAllEchange = async (req, res) => {
  const page = req.query.page;
  const limit = 10;

  await Echange.findMany({
    where: {
      statut: true,
    },
  })
    .then((data) => {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const resultProduct = data.slice(startIndex, endIndex);
      res.status(200).send({ length: resultProduct.length, resultProduct });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Une erreur est survenue !",
      });
    });
};

const desactiveEchange = async (req, res) => {
  const { id } = req.params;

  req.body.statut = false;

  await Echange.update({
    where: {
      id_echange: parseInt(id),
    },
    data: req.body,
  })
    .then(() => {
      res.status(200).send({
        message: "Echange désactivé !",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Une erreur est survenue !",
      });
    });
};

exports.creerEchange = creerEchange;
exports.getAllEchange = getAllEchange;
exports.desactiveEchange = desactiveEchange;
