import React, { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList';
import PostMeta2 from '@/components/PostMeta2/PostMeta2';
import { SingleType1Props } from '../single/single';
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment';
import SingleTitle from '../SingleTitle';
import SingleMetaAction2 from '../SingleMetaAction2';
import MyImage from '@/components/MyImage';

interface Props extends SingleType1Props {}

const SingleTypeVideo: FC<Props> = ({ post }) => {
    const {
        title,
        featuredImage,
        categories,
        excerpt,
        ncmazVideoUrl,
        postFormats,
    } = getPostDataFromPostFragment(post || {});

    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        setIsRendered(true);
    }, []);

    const renderMainVideo = () => {
        if (ncmazVideoUrl?.videoUrl && postFormats === 'video') {
            return isRendered ? (
                <ReactPlayer
                    url={ncmazVideoUrl?.videoUrl || ''}
                    className="absolute inset-0 h-full w-full"
                    playing={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    controls
                />
            ) : null;
        }

        if (featuredImage?.sourceUrl) {
            return (
                <MyImage
                    className="block h-full w-full object-cover"
                    src={featuredImage?.sourceUrl || ''}
                    alt={title}
                    priority
                    enableDefaultPlaceholder
                    sizes="(max-width: 1024px) 100vw, 1240px"
                    fill
                />
            );
        }
        return null;
    };

    const renderHeader = () => {
        return (
            <div className={`nc-SingleHeaderVideo`}>
                <div className="dark space-y-4 text-neutral-100 md:space-y-5">
                    <CategoryBadgeList
                        itemClass="!px-3"
                        categories={categories?.nodes || []}
                    />
                    <SingleTitle
                        mainClass="text-neutral-900 font-semibold text-2xl sm:text-3xl md:!leading-[120%] dark:text-neutral-100"
                        title={title || ''}
                    />

                    <div className="max-w-screen-sm break-words pb-1 text-sm text-neutral-500 lg:text-lg dark:text-neutral-400">
                        <span
                            className="line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        ></span>
                    </div>

                    <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
                    <div className="flex flex-wrap items-end justify-between gap-5">
                        <PostMeta2
                            size="large"
                            className="flex-shrink-0 leading-none"
                            hiddenCategories
                            avatarRounded="rounded-full shadow-inner"
                            post={{ ...post }}
                        />
                        <SingleMetaAction2 post={{ ...post }} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <header className="container relative flex flex-col py-14 xl:flex-row xl:items-center xl:py-20">
                {/*  */}
                <div className="nc-PageSingleVideo__headerWrap absolute inset-y-0 end-1/2 w-screen translate-x-1/2 transform bg-neutral-900 xl:w-[calc(100vw/2)] xl:translate-x-0 xl:rounded-e-[40px] dark:bg-black dark:bg-opacity-50"></div>
                {/*  */}

                <div className="relative pb-10 xl:pb-0 xl:pr-10">{renderHeader()}</div>
                <div className="relative flex-shrink-0 xl:w-8/12">
                    <div className="aspect-h-16 aspect-w-16 z-0 overflow-hidden rounded-3xl border-4 border-neutral-300 bg-neutral-800 shadow-2xl sm:aspect-h-9 dark:border-neutral-800">
                        {renderMainVideo()}
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="z-10 space-y-6 lg:col-span-2">
                    <header className="!mt-0">
                        <div className="rounded-lg border text-card-foreground shadow-sm bg-card/70 backdrop-blur-sm">
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex min-w-0 items-center gap-3">
                                            <img alt="Game icon" loading="lazy" width="32" height="32" decoding="async" className="flex-shrink-0 rounded-lg" src="...">
                                            <div className="min-w-0">
                                                <div className="text-2xl font-semibold leading-none tracking-tight">
                                                    <h1 className="truncate text-xl font-bold sm:text-2xl">ESP (Free)</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden shrink-0 items-center gap-2 md:flex"></div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <a aria-label="Search for game" className="hover:text-green-500 hover:underline" href="https://rscripts.net/scripts?q=Dead%20Rails%20Alpha">Dead Rails Alpha</a>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <svg ...></svg>2 days ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="flex flex-col gap-6 lg:flex-row">
                                    <div className="group relative w-full overflow-hidden rounded-lg lg:w-7/12">
                                        <img alt="Script preview thumbnail" fetchpriority="high" loading="eager" width="640" height="360" decoding="async" className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105" src="...">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                        <div className="absolute bottom-3 left-3 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Script Preview</div>
                                        <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
                                            <button data-state="closed"><span className="sr-only">Mobile Friendly</span></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between gap-4 lg:w-5/12">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <a className="flex items-center gap-2" href="https://rscripts.net/@0x256">
                                                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                                </a>
                                                <div className="flex items-center gap-2"></div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="ml-0 flex gap-1"></div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 col-span-2 transition-colors duration-200 hover:bg-accent">
                                                <span className="flex items-center gap-2">
                                                    <svg ...></svg>Download
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="script-description">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="text-2xl font-semibold leading-none tracking-tight">
                                    <h2>Description</h2>
                                </div>
                            </div>
                            <div className="p-6 pt-0 space-y-4">
                                <div className="mt-4 flex flex-col gap-4 sm:flex-row"></div>
                            </div>
                        </div>
                    </section>
                    <section className="script-comments" id="comments"></section>
                </div>
                <div className="w-full flex-col rounded border bg-card/40 pb-2 block sm:hidden" id="advert1">
                    <div className="flex w-full items-center justify-between px-2 py-2 text-left">
                        <strong className="block text-[11px] text-foreground/50">ADVERTISEMENT</strong>
                    </div>
                    <div className="mx-auto flex items-center justify-center min-h-[250px]">
                        <div data-fuse="23117773104"></div>
                    </div>
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
        </>
    );
};

export default SingleTypeVideo;
