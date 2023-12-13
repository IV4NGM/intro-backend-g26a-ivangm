// Los controladores tienen la lógica del negocio
const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  ModelHomes.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findAllHomes = (req, res) => {
  ModelHomes.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createHome,
  findAllHomes
}
