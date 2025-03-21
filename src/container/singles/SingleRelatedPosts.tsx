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
  // Ako nema postova, ne prikazujemo ništa
  if (!posts?.length) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        {/* Prikazujemo postove korištenjem SectionSliderPosts */}
        <SectionSliderPosts 
          postCardName="card9" 
          posts={posts} 
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SingleRelatedPosts;
