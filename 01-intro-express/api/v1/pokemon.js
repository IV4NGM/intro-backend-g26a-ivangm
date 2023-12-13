const { Router } = require('express')
const axios = require('axios')

const router = Router()

router.get('/api/v1/pokemon', async (request, response) => {
  const { count } = request.query
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
    console.log(data)
    response.status(200).send(data)
  } catch (error) {
    console.log(error)
    response.status(500).send(error)
  }
})

module.exports = router
