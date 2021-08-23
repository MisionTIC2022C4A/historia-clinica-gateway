//Se llama al typedef (esquema) de cada submodulo
const patientTypeDefs = require('./patient_type_def');
const serviceTypeDefs = require('./service_type_def');

//Se unen
const schemasArrays = [patientTypeDefs, serviceTypeDefs];

//Se exportan
module.exports = schemasArrays; 