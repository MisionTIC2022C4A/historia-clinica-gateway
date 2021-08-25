const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PatientAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.patient_api_url;    
    }

    async getPatient(numeroIdentificacion, tipoIdentificacion){
      return await this.get(`/patient/${numeroIdentificacion}/${tipoIdentificacion}`);
    }

    async deletePatient(numeroIdentificacion, tipoIdentificacion){
      return await this.delete( `/patient/${numeroIdentificacion}/${tipoIdentificacion}`);
    
    }

    async createPatient(patient){
      patient = new Object(JSON.parse(JSON.stringify(patient)));
      return await this.post(`/patient`, patient);
    }

}

module.exports = PatientAPI;