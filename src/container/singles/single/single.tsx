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

    const hasFeaturedImage = !!featuredImage?.sourceUrl;

    const imgWidth = featuredImage?.mediaDetails?.width || 1000;
    const imgHeight = featuredImage?.mediaDetails?.height || 750;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="bg-background __className_3a0388 min-h-screen">
                {/* ... ostali postojeći kod ... */}
                
                <aside className="script-similar-scripts lg:col-span-1">
                    <div className="rounded-lg border text-card-foreground shadow-sm sticky top-20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="flex flex-col space-y-1.5 p-6 pb-3">
                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                <h2>Similar Scripts</h2>
                            </div>
                            {/* RELATED POSTS */}
                            <DynamicSingleRelatedPosts
                                posts={relatedPosts}
                                postDatabaseId={databaseId}
                            />
                        </div>
                    </div>
                </aside>
                
                {/* ... ostatak postojećeg koda ... */}
            </div>
        </>
    );
};

export default SingleType1;
