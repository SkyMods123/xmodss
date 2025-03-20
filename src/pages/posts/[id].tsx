import React from "react";
import SingleContent from "@/container/singles/SingleContent";
import Sidebar from "@/container/singles/Sidebar";
import DynamicSingleRelatedPosts from "@/container/singles/SingleRelatedPosts";

const page677 = ({ post, showRightSidebar, relatedPosts = [] }) => {
    return (
        <div className="container my-10">
            <div className="flex flex-col lg:flex-row">
                {/* Glavni sadržaj posta */}
                <div className={`w-full ${showRightSidebar ? "lg:w-3/5 xl:w-2/3 xl:pe-20" : ""}`}>
                    <SingleContent post={post} />
                </div>

                {/* Sidebar (ako je aktivan) */}
                {showRightSidebar && (
                    <div className="mt-12 w-full lg:mt-0 lg:w-2/5 lg:ps-10 xl:w-1/3 xl:ps-0">
                        <Sidebar categories={post.categories || []} />
                    </div>
                )}
            </div>

            {/* Sekcija sa povezanim postovima */}
            <DynamicSingleRelatedPosts posts={relatedPosts} postDatabaseId={post.databaseId} />
        </div>
    );
};

export default page677;
