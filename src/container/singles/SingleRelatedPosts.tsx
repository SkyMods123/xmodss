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
  return (
          <SectionSliderPosts postCardName="card9" posts={posts || []} />
  );
};

export default SingleRelatedPosts;
