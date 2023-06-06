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

export const GET_PRIVACY_POLICY = gql`
  query {
    pages(where: { title: "Privacy Policy" }) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`;

export const GET_LEGAL_NOTICE = gql`
  query {
    pages(where: { title: "Legal Notice" }) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`;

export const GET_MY_CODE_OF_ETHICS = gql`
  query {
    pages(where: { title: "My code of ethics" }) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`;
