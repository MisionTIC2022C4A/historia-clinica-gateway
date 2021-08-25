const { gql } = require('apollo-server');

const serviceTypeDefs = gql`
type Attention {
    pacTipoId: String!
    pacNumId: String!
    pacNombre: String!
	servicio: Service!
	profesional: Professional!
	fechaCreacion: String
}

input AttentionInput {
    pacTipoId: String!
    pacNumId: String!
	servicio: String!
	profesional: Int!
	fechaCreacion: String
}

type Service {
    codServicio: String!
	nombreServicio: String!
	tipo: String!
	fechaCreacion: String
}

input ServiceInput {
    codServicio: String!
	nombreServicio: String
	tipo: String
	fechaCreacion: String
}

type Professional {
    nombreCompleto: String
	tipoIdentificacion: String
	numeroIdentificacion: String
	telefono: String
	email: String
	profesion: String
	especialidad: String
	registroMedico: String
	fechaCreacion: String
}

input ProfessionalInput {
	id: Int!
    nombreCompleto: String
	tipoIdentificacion: String
	numeroIdentificacion: String
	telefono: String
	email: String
	profesion: String
	especialidad: String
	registroMedico: String
	fechaCreacion: String
}

extend type Query {
    getAttentionByDay(day: String): [Attention]
}
type Mutation {
    createAttention(attention: AttentionInput!): Attention
}
`;

module.exports = serviceTypeDefs; 
