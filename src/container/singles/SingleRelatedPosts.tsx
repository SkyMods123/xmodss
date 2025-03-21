import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import SectionSliderPosts from "@/components/Sections/SectionSliderPosts";
import { PostDataFragmentType } from "@/data/types";

export interface SingleRelatedPostsProps {
  postDatabaseId: number;
  posts: PostDataFragmentType[] | null;
}

const SingleRelatedPosts: FC<SingleRelatedPostsProps> = ({
  postDatabaseId,
  posts,
}) => {
  if (!posts?.length) {
    return <div className="py-5" />;
  }

  return (
          <SectionSliderPosts postCardName="card7" posts={posts || []} />
        );
};

export default SingleRelatedPosts;
