const { gql } = require('apollo-server');

const patientTypeDefs = gql`


type Patient {
    numeroIdentificacion: String!
    tipoIdentificacion: String!
    nombreCompleto: String!
    fechaNacimiento:String
    estadoCivil: String!
    ocupacion:String!
    direccion: String!
    ciudad : String!
    telefono: String!
    email: String!
    nombreAcompanante: String!
    aseguradora: String!
    vinculacion: String!
    fechaIngreso:String!
}

input PatientInput {
    numeroIdentificacion: String!
    tipoIdentificacion: String!
    nombreCompleto: String!
    fechaNacimiento:String
    estadoCivil: String!
    ocupacion:String!
    direccion: String!
    ciudad : String!
    telefono: String!
    email: String!
    nombreAcompanante: String!
    aseguradora: String!
    vinculacion: String!
    fechaIngreso:String!
}

type Query {
    getPatient(numeroIdentificacion: String!, tipoIdentificacion: String!): Patient
}

type Mutation {
    createPatient(patient: PatientInput!): Patient
    deletePatient(numeroIdentificacion: String!, tipoIdentificacion: String!):Boolean

}

   
`;

module.exports = patientTypeDefs; 

