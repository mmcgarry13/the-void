import { gql } from 'apollo-server-express';
import ScreamModel, { IScream } from '../models/Scream';

export const typeDefs = gql`
  type Scream {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
  }

  type Query {
    getEntries: [Scream!]!
  }

  type Mutation {
    addScream(title: String!, content: String!): Scream!
  }
`;

export const resolvers = {
    Query: {
        getEntries: async (): Promise<IScream[]> => {
            return await ScreamModel.find().sort({ createdAt: -1 });
        },
    },
    Mutation: {
        addScream: async (_: any, { title, content }: { title: string; content: string }): Promise<IScream> => {
            const newScream = new ScreamModel({ title, content });
            return await newScream.save();
        },
    },
};