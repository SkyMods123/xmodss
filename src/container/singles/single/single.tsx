import React, { FC } from 'react';
import Head from 'next/head';
import NcImage from '@/components/NcImage/NcImage';
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment';
import SingleHeader from '../SingleHeader';
import { FragmentTypePostFullFields } from '@/container/type';
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta'; // Import PostCardMeta

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
            <Head>
                <title>{title}</title>
            </Head>
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
                <div className="absolute -top-[370px] hidden h-[50rem] w-full md:block"></div>
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
                                                                <h2 className="text-neutral-900 truncate text-xl font-bold sm:text-2xl dark:text-neutral-100">
                                                                    {title}
                                                                </h2>
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
                                                        Sky Mods
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
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
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
                                        <div className="p-6 pt-0">
                                            <div className="flex flex-col gap-6 lg:flex-row">
                                                <div className="group relative w-full overflow-hidden rounded-lg lg:w-7/12">
                                                    <img
                                                        src={featuredImage?.sourceUrl || ''}
                                                        width="640"
                                                        height="360"
                                                        fetchPriority="high"
                                                        loading="eager"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                                        style={{ color: 'transparent' }}
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between gap-4 lg:w-5/12">
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <a className="flex items-center gap-2" href="https://rscripts.net/@0x256">
                                                                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">0x</span>
                                                                </span>
                                                                <span className="flex cursor-pointer items-center gap-1 text-base font-medium text-foreground hover:text-primary">
                                                                    viewCount
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-v[...]
                                                        >
                                                            <span className="flex items-center gap-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    className="lucide lucide-copy mr-2 h-4 w-4"
                                                                >
                                                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2 2"></path>
                                                                </svg>
                                                                Download
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                            </div>
                            <aside className="script-similar-scripts lg:col-span-1">
                                <div className="rounded-lg border text-card-foreground shadow-sm sticky top-20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                    <div className="flex flex-col space-y-1.5 p-6 pb-3">
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            <h2>Similar Scripts</h2>
                                        </div>
                                    </div>
                                </div>
                            </aside>
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
                <PostCardMeta // Add PostCardMeta component here
                    className="text-sm"
                    meta={{ date, author }}
                    hiddenAvatar={false}
                    avatarSize="h-7 w-7 text-sm"
                />
            </div>
        </>
    );
};

export default SingleType1;
