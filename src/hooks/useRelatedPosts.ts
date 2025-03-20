import { useQuery } from '@apollo/client';
import { gql } from '../__generated__';
import { TPostCard } from '@/components/Card2/Card2';

// Definišimo interfejs za response
interface RelatedPostsResponse {
  posts: {
    nodes: TPostCard[];
  };
}

interface RelatedPostsVars {
  post_databaseId: number;
}

const GET_RELATED_POSTS = gql(`
  query GetRelatedPosts($post_databaseId: Int!) {
    posts(where: {isRelatedOfPostId: $post_databaseId}) {
      nodes {
        databaseId
        title
        uri
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            uri
            avatar {
              url
            }
          }
        }
      }
    }
  }
`);

export const useRelatedPosts = (postDatabaseId: number) => {
  const { data, loading, error } = useQuery<RelatedPostsResponse, RelatedPostsVars>(
    GET_RELATED_POSTS,
    {
      variables: {
        post_databaseId: postDatabaseId
      },
      skip: !postDatabaseId,
    }
  );

  return {
    relatedPosts: data?.posts?.nodes || [],
    loading,
    error
  };
};
