import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './src/config/connection';
import { typeDefs, resolvers } from './src/schemas/resolvers';

const startServer = async () => {
    const app: Express = express();

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    await connectDB();

    const PORT = 4000;
    app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    );
};

startServer();