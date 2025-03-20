import React from "react";
import SingleRelatedPosts from "@/container/singles/SingleRelatedPosts";
import { PostDataFragmentType } from "@/data/types";

// Primer podataka za postove
const posts: PostDataFragmentType[] = [
  // Dodajte vaše post podatke ovde
];

const NewPage: React.FC = () => {
  return (
    <div>
      <h1>Ovo je nova stranica</h1>
      <SingleRelatedPosts postDatabaseId={1} posts={posts} />
    </div>
  );
};

export default NewPage;
