// const express = require('express');
// const router = express.Router();

const { Router } = require('express')
const router = Router()

const petList = {
  pets: [
    {
      id: 1,
      name: 'Firulais',
      age: 3,
      type: 'dog'
    },
    {
      id: 2,
      name: 'Michi',
      age: 2,
      type: 'cat'
    },
    {
      id: 3,
      name: 'Scooby Doo',
      age: 6,
      type: 'dog'
    }
  ]
}

router.get('/api/v1/pets', (req, res) => {
  const { type, name, age } = req.query
  if (!type && !name && !age) {
    res.send(petList)
  }

  // const filteredByType = petList.pets.filter(pet => pet.type === type)
  // const filteredByName = petList.pets.filter(pet => pet.name.toLowerCase() === name?.replace('%20', ' ').toLowerCase())
  // const filteredByAge = petList.pets.filter(pet => pet.age === parseInt(age))

  const filteredPets = petList.pets.filter(pet => (pet.age === parseInt(age) || pet.type === type))
  if (filteredPets.length > 0) {
    res.send(filteredPets)
  }
  // OJO: EL CÓDIGO DADO EN CLASE NO FILTRA PARA VARIOS QUERY PARAMS A LA VEZ CON &.
  // if (filteredByType || filteredByName || filteredByAge) {
  //   return res.send(filteredByType || filteredByName || filteredByAge)
  // }

  // if (filteredByType.length > 0) {
  //   res.send(filteredByType)
  // }
  // if (filteredByName.length > 0) {
  //   res.send(filteredByName)
  // }
  // if (filteredByAge.length > 0) {
  //   res.send(filteredByAge)
  // }
})

// ESTA FUNCIÓN YA FILTRA CORRECTAMENTE:
router.get('/api/v1/pets/myfilter', (request, response) => {
  let filteredPets = [...petList.pets]
  const { type, name, age } = request.query

  if (name) {
    filteredPets = filteredPets.filter(pet => pet.name.toLowerCase() === name.replace('%20', ' ').toLowerCase())
  }

  if (age) {
    filteredPets = filteredPets.filter(pet => pet.age === parseInt(age))
  }

  if (type) {
    filteredPets = filteredPets.filter(pet => pet.type.toLowerCase() === type.toLowerCase())
  }

  response.send(filteredPets)
})

router.get('/api/v1/pets/:petId', (req, res) => {
  const { petId } = req.params
  // Todo lo que recibamos de req.params es un string
  const pet = petList.pets.find(pet => pet.id === parseInt(petId))
  if (!pet) {
    return res.status(404).send('Pet Not Found')
  } else {
    return res.send(pet)
  }
})

module.exports = router
