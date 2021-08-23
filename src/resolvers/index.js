const patientTypeDefs = require('./patient_type_def');
const serviceTypeDefs = require('./service_type_def');

const lodash = require('lodash');

const resolvers = lodash.merge(patientTypeDefs, serviceTypeDefs);

module.exports = resolvers;