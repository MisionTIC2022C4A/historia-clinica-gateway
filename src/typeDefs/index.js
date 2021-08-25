//Se llama al typedef (esquema) de cada submodulo
const patientTypeDefs = require('./patient_type_def');

//Se unen
const schemasArrays = [patientTypeDefs];

//Se exportan
module.exports = schemasArrays; 