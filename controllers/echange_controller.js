const pkg = require('@prisma/client')
const { PrismaClient } = pkg
const prisma =new PrismaClient
const {echange: Echange} = prisma

const creerEchange = async (req , res ) => {
  Echange.create({
    data: req.body
  }).then(()=>{
    res.status(201).send({
      message: "Echange ajouté !",
    })
  }).catch((error) => {
    res.status(500).send({
      message : error.message || 'Une erreur est survenue !'
    })
  })
}

exports.creerEchange = creerEchange