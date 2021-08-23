
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const PatientAPI = require('./dataSources/patient_api');
const ServiceAPI = require('./dataSources/service_api');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        serviceAPI: new ServiceAPI(),
        patientAPI: new PatientAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});