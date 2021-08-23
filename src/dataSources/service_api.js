const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ServiceAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.service_api_url;
    }

}

module.exports = ServiceAPI;