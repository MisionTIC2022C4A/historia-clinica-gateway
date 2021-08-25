const patientResolver = {
    Query: {
        createPatient: (_, {numeroIdentificacion,tipoIdentificacion}, {dataSources}) => {
            return dataSources.patientAPI.createPatient(numeroIdentificacion,tipoIdentificacion);
        }
        
    },
    Mutation: {
        
    }
};



module.exports = patientResolver;