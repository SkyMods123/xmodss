import React, { FC } from 'react';
import Head from 'next/head'; // Add this import
import NcImage from '@/components/NcImage/NcImage';
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment';
import SingleHeader from '../SingleHeader';
import { FragmentTypePostFullFields } from '@/container/type';

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
        excerpt,
        featuredImage,
        ncPostMetaData,
    } = getPostDataFromPostFragment(post || {});

    const hasFeaturedImage = !!featuredImage?.sourceUrl;

    const imgWidth = featuredImage?.mediaDetails?.width || 1000;
    const imgHeight = featuredImage?.mediaDetails?.height || 750;

    return (
        <>
            <body className="bg-background __className_3a0388 min-h-screen">
                <div className="coverimg absolute -top-[380px] hidden h-[50rem] w-full opacity-30 blur-[2px] md:block">
                    <img
                        alt="background coverart"
                        fetchPriority="high"
                        loading="eager"
                        width="135"
                        height="160"
                        decoding="async"
                        data-nimg="1"
                        className="h-[800px] w-full object-cover object-top"
                        style={{ color: 'transparent' }}
                    />
                </div>
                <div className="absolute -top-[370px] hidden h-[50rem] w-full bg-gradient-to-b from-gray-200/40 to-white dark:from-muted/20 dark:to-background md:block"></div>
                <div className="min-h-screen bg-background">
                    <main className="container px-4 py-6 lg:px-14">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="z-10 space-y-6 lg:col-span-2">
                                <header className="!mt-0">
                                    <div className="rounded-lg border text-card-foreground shadow-sm bg-card/70 backdrop-blur-sm">
                                        <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="flex min-w-0 items-center gap-3">
                                                        <img
                                                            alt="Game icon"
                                                            loading="lazy"
                                                            width="32"
                                                            height="32"
                                                            decoding="async"
                                                            data-nimg="1"
                                                            className="flex-shrink-0 rounded-lg"
                                                            style={{ color: 'transparent' }}
                                                        />
                                                        <div className="min-w-0">
                                                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                                                <h1 className="truncate text-xl font-bold sm:text-2xl">ESP (Free)</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <a
                                                        aria-label="Search for game"
                                                        className="hover:text-green-500 hover:underline"
                                                        href="https://rscripts.net/scripts?q=Dead%20Rails%20Alpha"
                                                    >
                                                        Dead Rails Alpha
                                                    </a>
                                                    <span>•</span>
                                                    <div className="flex items-center gap-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-clock h-3.5 w-3.5"
                                                        >
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <polyline points="12 6 12 12 16 14"></polyline>
                                                        </svg>
                                                        2 days ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
            <div className={`nc-PageSingle pt-8 lg:pt-16`}>
                <header className="container rounded-xl">
                    <div className={!hasFeaturedImage && showRightSidebar ? '' : `mx-auto max-w-screen-md`}>
                        <SingleHeader post={{ ...post }} />
                        {!hasFeaturedImage && (
                            <div className="my-5 border-b border-neutral-200 dark:border-neutral-800" />
                        )}
                    </div>
                </header>
                {!!hasFeaturedImage && (
                    <NcImage
                        alt={title}
                        containerClassName="container my-10 sm:my-12"
                        className={`mx-auto rounded-xl ${
                            imgWidth <= 768 && ncPostMetaData?.showRightSidebar
                                ? 'w-full max-w-screen-md'
                                : ''
                        }`}
                        src={featuredImage?.sourceUrl || ''}
                        width={imgWidth}
                        height={imgHeight}
                        sizes={'(max-width: 1024px) 100vw, 1280px'}
                        priority
                        enableDefaultPlaceholder
                    />
                )}
            </div>
        </>
    );
};

export default SingleType1;
