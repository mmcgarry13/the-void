import { gql } from '@apollo/client';


export const QUERY_SCREAM = gql`
    query scream($screamId: ID!) {
        scream(screamId: $screamId) {
            _id
            content
            createdAt
        }
    }
`;
