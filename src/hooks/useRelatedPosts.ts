import { useQuery } from '@apollo/client';
import { gql } from '../__generated__'; // Prilagodite putanju prema vašoj strukturi
import { TPostCard } from '@/components/Card2/Card2';
import { GetRelatedPostsQuery } from '../__generated__/graphql'; // Dodajte ovaj import

// Definišite upit koristeći gql template literal
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
  const { data, loading, error } = useQuery<GetRelatedPostsQuery>(GET_RELATED_POSTS, {
    variables: {
      post_databaseId: postDatabaseId
    },
    skip: !postDatabaseId,
  });

  return {
    relatedPosts: (data?.posts?.nodes as TPostCard[]) || [],
    loading,
    error
  };
};
