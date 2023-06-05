import { gql } from "@apollo/client";

export const GET_LATEST_POSTS = gql`
  query {
    posts(first: 3) {
      edges {
        node {
          id
          date
          title
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
