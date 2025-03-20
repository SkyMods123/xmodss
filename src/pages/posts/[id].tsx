import React from "react";
import SingleRelatedPosts from "@/container/singles/SingleRelatedPosts";
import { PostDataFragmentType } from "@/data/types";

// Example data for related posts
const relatedPosts: PostDataFragmentType[] = [
  // Populate this array with actual post data
];

const ExamplePage = () => {
  const postDatabaseId = 123; // Replace with the actual post database ID

  return (
    <div>
      <h1>Example Page</h1>
      {/* Other page content */}

      {/* Display related posts */}
      <SingleRelatedPosts postDatabaseId={postDatabaseId} posts={relatedPosts} />
    </div>
  );
};

export default ExamplePage;
