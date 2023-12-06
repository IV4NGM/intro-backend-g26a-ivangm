const { Router } = require('express');
const router = Router();

// Ejemplo de mala práctica
router.patch('/api/v1/cakes/:cakeId', (request, response) => {
  // const cakeId = request.params.cakeId;
  const { cakeId } = request.params;
  if (cakeId > 100) {
    return response.status(401).send('Pastel no encontrado');
  } else {
    return response.status(201).send('Pastel encontrado');
  }
})

module.exports = router;