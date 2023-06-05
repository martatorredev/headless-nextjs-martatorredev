import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      edges {
        node {
          id
          author {
            node {
              firstName
            }
          }
        }
      }
    }
  }
`;
