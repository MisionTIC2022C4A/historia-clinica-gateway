const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PatientAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.patient_api_url;    
  }

}

module.exports = PatientAPI;