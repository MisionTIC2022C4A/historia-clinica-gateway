const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ServiceAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.service_api_url;
    }

    async createAttention(attention){
        return await this.post('/api/nueva_atencion', attention);
      }
    
    async getAttentionByDay(day){
        return await this.get( `/api/atenciones_dia/${day}`);
      
      }
    
     async createPatient(patient){
        patient = new Object(JSON.parse(JSON.stringify(patient)));
        return await this.post(`/api/patient`, patient);
      }

}

module.exports = ServiceAPI;