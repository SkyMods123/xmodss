import { useQuery } from '@apollo/client';
import { gql } from '@/__generated__';
import { TPostCard } from '@/components/Card2/Card2';

const GET_RELATED_POSTS = gql(`
  query GetRelatedPosts($post_databaseId: Int!) {
    posts(where: {isRelatedOfPostId: $post_databaseId}) {
      nodes {
        ...PostCardFieldsNOTNcmazMEDIA
      }
    }
  }
`);

export const useRelatedPosts = (postDatabaseId: number) => {
  const { data, loading, error } = useQuery(GET_RELATED_POSTS, {
    variables: {
      post_databaseId: postDatabaseId
    },
  });

  return {
    relatedPosts: (data?.posts?.nodes as TPostCard[]) || [],
    loading,
    error
  };
};
