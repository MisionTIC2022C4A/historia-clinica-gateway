const serviceResolver = {
    Query: {
        getAttentionByDay: (_, {day}, {dataSources}) => {
            return dataSources.serviceAPI.getAttentionByDay(day)
        }
        
    },
    Mutation: {
        createAttention: (_, {attention}, {dataSources}) => {
            return dataSources.serviceAPI.createAttention(attention)
        }
    }
};

module.exports = serviceResolver;