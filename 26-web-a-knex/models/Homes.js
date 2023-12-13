// El modelo trae los datos de la base de datos
// No se encarga de validar datos ni de resolver promesas, porque eso estrabajo del controlador en MVC.

// Paso 1: Traer la configuración del entorno de knex y los detalles de conexión a la base de datos
const knex = require('../config')

// Paso 2: Crear una función que permita crear un nuevo registro en la tabla homes

const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // Datos a insertar
    .into('homes') // Tabla a insertar
    .returning('*') // Datos a retornar (el * indica todos los campos)
}

const findAll = () => {
  return knex
    .select(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where({ active: true }) // Traemos los campos en donde no hayamos hecho un soft delete
}

// Paso 3: Exportar las funciones para que sean accesibles desde el controlador.
module.exports = {
  create,
  findAll
}
