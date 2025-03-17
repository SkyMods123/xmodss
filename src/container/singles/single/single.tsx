import React, { FC } from 'react'
import Head from 'next/head' // Add this import
import NcImage from '@/components/NcImage/NcImage'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'
import SingleHeader from '../SingleHeader'
import { FragmentTypePostFullFields } from '@/container/type'

export interface SingleType1Props {
    post: FragmentTypePostFullFields
    showRightSidebar?: boolean
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
    } = getPostDataFromPostFragment(post || {})
    
    const hasFeaturedImage = !!featuredImage?.sourceUrl

    const imgWidth = featuredImage?.mediaDetails?.width || 1000
    const imgHeight = featuredImage?.mediaDetails?.height || 750

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
                                        <div className="p-6 pt-0">
                                            <div className="flex flex-col gap-6 lg:flex-row">
                                                <div className="group relative w-full overflow-hidden rounded-lg lg:w-7/12">
                                                    <img
                                                        alt="Script preview thumbnail"
                                                        fetchPriority="high"
                                                        loading="eager"
                                                        width="640"
                                                        height="360"
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
                                                                    0x256
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visib[...]"
                                                        >
                                                            <span className="flex items-center gap-2">
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
                    </main>
                </div>
            </body>
            {/* Description */}
            <div className="bg-[#161b22] text-white border border-[#2f353c] rounded-sm p-3 mt-4">
                <h3 className="text-3xl font-semibold p-3">Description</h3>
                <p className="font-bold text-lg mt-2 pl-3">
                    Plitch Trainer is a cheat supplier/provider for many games with multiple mods. This has a premium version alongside a free version.
                </p>
                <div className="text-xl pl-3 pt-5">
                    <h3>Features:</h3>
                    <ul className="list-disc pl-7 pt-2">
                        <li>view description</li>
                    </ul>
                </div>
                {/* Discord Link */}
                <div className="mt-4">
                    <a href="#" className="bg-[#0d1116] text-[#818cf8] text-lg px-4 py-2 rounded-lg inline-block">
                        Join No6No6No7's Discord Server
                    </a>
                </div>
            </div>
            <div className="basis-4/12 bg-[#161b22] border border-[#2f353c] rounded-sm p-7 mt-5 mx-6">
                <h1 className="text-white font-bold text-3xl pb-7">Similar Scripts</h1>
                <div className="flex gap-5">
                    <img
                        height={70}
                        width={130}
                        src="/images/espm.webp"
                        className="rounded-2xl"
                    />
                    <div>
                        <h2 className="text-white text-lg font-bold">item magnet</h2>
                        <h3 className="text-[#a3a3a3] font-semibold">Dead Rails [Alpha]</h3>
                        <h4 className="text-[#a3a3a3] font-semibold">3 weeks ago</h4>
                    </div>
                </div>
            </div>
            <div className={`nc-PageSingle pt-8 lg:pt-16`}>
                <header className="container rounded-xl">
                    <div
                        className={
                            !hasFeaturedImage && showRightSidebar
                                ? ''
                                : `mx-auto max-w-screen-md`
                        }
                    >
                        <SingleHeader post={{ ...post }} />
                        {!hasFeaturedImage && (
                            <div className="my-5 border-b border-neutral-200 dark:border-neutral-800" />
                        )}
                    </div>
                </header>

                {/* FEATURED IMAGE */}
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
    )
}

export default SingleType1
