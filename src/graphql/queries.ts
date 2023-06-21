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

export const GET_POSTS = gql`
  query {
    posts {
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

export const GET_CATEGORIES = gql`
  query {
    categories {
      edges {
        node {
          id
          name
          count
        }
      }
    }
  }
`;

export const GET_POSTS_BY_TITLE = (title: string) => gql`
query {
  posts(where: {title:"${title}"}) {
    edges {
      node {
        id
        date
        title
        date
        modified
        content
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
