const patientResolver = require('./patient_resolver');
const serviceResolver = require('./service_resolver');

const lodash = require('lodash');


const resolvers = lodash.merge(patientResolver, serviceResolver);

module.exports = resolvers;