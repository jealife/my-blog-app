import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
      content{
        html
      }
    }
  }
`;

const GET_ALL_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { slug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          coverImage {
            data {
              attributes {
                url
              }
            }
          }
          content
        }
      }
    }
  }
`;

export { GET_ALL_SLUGS, GET_ALL_POSTS, GET_ALL_INDIVIDUAL_POST };
