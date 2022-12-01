import gql from "graphql-tag";
    
const POSTS_QUERY = gql`
query Posts {
    posts {
      id
      title
      content
      published_at
      cover {
        url
      }
    }
  }
`;

export default POSTS_QUERY;