const patientResolver = {
    Query: {
        getPatient: (_, {numeroIdentificacion,tipoIdentificacion}, {dataSources}) => {
            return dataSources.patientAPI.getPatient(numeroIdentificacion,tipoIdentificacion);
        }
        
    },
    Mutation: {
        createPatient: (_, {patient}, {dataSources}) => {
            return dataSources.patientAPI.createPatient(patient);
        },
        
    
        deletePatient: (_, {numeroIdentificacion,tipoIdentificacion}, {dataSources}) => {
            return dataSources.patientAPI.deletePatient(numeroIdentificacion,tipoIdentificacion);
        }
    }
    
        
};

module.exports = patientResolver;
