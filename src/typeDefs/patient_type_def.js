const { gql } = require('apollo-server');

const patientTypeDefs = gql`

type Patient {
    numeroIdentificacion: String!
    tipoIdentificacion: String!
    nombreCompleto: String!
    fechaNacimiento:LocalDate
    estadoCivil: String!
    ocupacion:String!
    direccion: String!
    ciudad : String!
    telefono: String!
    email: String!
    nombreAcompanante: String!
    aseguradora: String!
    vinculacion: String!
    fechaIngreso:LocalDate!
}

input PatientInput {
    numeroIdentificacion: String!
    tipoIdentificacion: String!
    nombreCompleto: String!
    fechaNacimiento:LocalDate
    estadoCivil: String!
    ocupacion:String!
    direccion: String!
    ciudad : String!
    telefono: String!
    email: String!
    nombreAcompanante: String!
    aseguradora: String!
    vinculacion: String!
    fechaIngreso:LocalDate!
}

type Query {
    getPatient(numeroIdentificacion: String!, tipoIdentificacion: String!): Patient
}

type Mutation {
    createPatient(patient: PatientInput!): Patient
    deletePatient(numeroIdentificacion: String!, tipoIdentificacion: String!)

}

   
`;

module.exports = patientTypeDefs; 

