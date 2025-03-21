import React, { FC } from 'react';
import Head from 'next/head';
import Tag from '@/components/Tag/Tag';
import NcImage from '@/components/NcImage/NcImage';
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment';
import SingleHeader from '../SingleHeader';
import { FragmentTypePostFullFields } from '@/container/type';
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta';
import useGetPostsNcmazMetaByIds from "@/hooks/useGetPostsNcmazMetaByIds";
import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';
import { TPostCard } from '@/components/Card2/Card2';

const DynamicSingleRelatedPosts = dynamic(
    () => import('@/container/singles/SingleRelatedPosts'),
);

// GraphQL query za related posts
const GET_RELATED_POSTS = gql`
  query GetRelatedPosts($databaseId: ID!) {
    posts(where: { categoryIn: $databaseId }, first: 3) {
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
`;

export interface SingleType1Props {
    post: FragmentTypePostFullFields;
    showRightSidebar?: boolean;
}

const SingleType1: FC<SingleType1Props> = ({ post, showRightSidebar }) => {
    const {
        title,
        content,
        date,
        author,
        databaseId,
        tags,
        excerpt,
        featuredImage,
        ncPostMetaData,
    } = getPostDataFromPostFragment(post || {});

    // Fetch related posts
    const { data: relatedPostsData } = useQuery(GET_RELATED_POSTS, {
        variables: { databaseId },
        skip: !databaseId
    });

    const relatedPosts = relatedPostsData?.posts?.nodes || [];

    // Hook za meta podatke
    const { loading: loadingRelatedMeta } = useGetPostsNcmazMetaByIds({
        posts: relatedPosts as TPostCard[]
    });

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="bg-background __className_3a0388 min-h-screen">
                <div className="my-10 lg:my-14">
                    <SingleHeader
                        hiddenDesc={!!ncPostMetaData?.hideDescription}
                        titleMainClass="max-w-5xl"
                        className="container"
                        title={title}
                        date={date}
                        author={author}
                        content={excerpt}
                        featuredImage={featuredImage}
                    />
                </div>

                <div className="container my-10">
                    {/* ... postojeći sadržaj ... */}
                </div>

                {/* RELATED POSTS */}
                {!loadingRelatedMeta && relatedPosts.length > 0 && (
                    <div className="container my-10">
                        <DynamicSingleRelatedPosts
                            posts={relatedPosts as TPostCard[]}
                            postDatabaseId={databaseId}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleType1;
