const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('prisma')

const resolvers = {

}

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    constext: request => {
        return {
            ...request,
            prisma
        }
    }
})
server.start(() => console.log('server running'))
