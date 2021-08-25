const patientResolver = require('./patient_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(patientResolver);

module.exports = resolvers;