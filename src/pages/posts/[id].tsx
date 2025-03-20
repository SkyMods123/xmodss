import React from "react";
import SingleContent from "@/container/singles/SingleContent";
import DynamicSingleRelatedPosts from "@/container/singles/SingleRelatedPosts";

const page677 = ({ post, showRightSidebar, relatedPosts = [] }) => {
    return (
        <div className="container my-10">
            <div className="flex flex-col lg:flex-row">
                <DynamicSingleRelatedPosts posts={relatedPosts} postDatabaseId={post.databaseId} />
            </div>
        </div>
    );
};

export default page677;
