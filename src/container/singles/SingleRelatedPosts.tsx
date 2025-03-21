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
    return <SectionSliderPosts postCardName="card9" posts={posts || []} />;
  }

  return (
    <div className="bg-neutral-100/80 dark:bg-neutral-800 py-16 lg:py-20 mt-16 lg:mt-20">
      {/* RELATED  */}
      <div className="container">
        <div>
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            Related posts
          </Heading>

          <Div postCardName="card7" posts={posts || []} />
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedPosts;
