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
    //
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
    //
    const hasFeaturedImage = !!featuredImage?.sourceUrl

    const imgWidth = featuredImage?.mediaDetails?.width || 1000
    const imgHeight = featuredImage?.mediaDetails?.height || 750
    return (
        <>
            <Head>
                <title>Plitch Trainer</title>
                <meta name="description" content="Plitch Trainer is a cheat supplier/provider for many games with multiple mods, offering both premium and free versions." />
                <meta name="keywords" content="Plitch Trainer, cheat provider, game mods, gaming cheats, game trainers" />
                {/* <meta name="author" content="Your Name" /> */}
                <meta property="og:title" content="Plitch Trainer" />
                <meta property="og:description" content="Plitch Trainer is a cheat supplier/provider for many games with multiple mods, offering both premium and free versions." />
                {/* <meta property="og:image" content="/images/noFilter.webp" /> */}
                {/* <meta property="og:url" content="https://your-website-url.com/plitch-trainer" /> */}
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta name="twitter:title" content="Plitch Trainer" />
                <meta name="twitter:description" content="Plitch Trainer is a cheat supplier/provider for many games with multiple mods, offering both premium and free versions." />
                {/* <meta name="twitter:image" content="/images/noFilter.webp" /> */}
            </Head>
            <div className="bg-black min-h-screen flex flex-col lg:flex-row lg justify-center p-6 px-0 lg:px-12">
                <div className="basis-8/12 shadow-lg rounded-lg p-6">
                    <div className="bg-[#161b22] border border-[#2f353c] rounded-sm p-3">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-xl font-semibold">Plitch Trainer</h2>
                            <div className="flex items-center bg-[#202731cc] text-[#d4dae3] text-lg px-3 py-2 rounded-full gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path d="M14.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/></svg>
                                <span>2,569 views</span>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-5">
                            <div className="basis-full lg:basis-7/12 mt-4">
                                <img 
                                    src="/images/noFilter.webp" 
                                    alt="Game Thumbnail" 
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="basis-full lg:basis-5/12 flex flex-col justify-between mt-3">
                                <div className="text-white">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1>No6No6No7Verified</h1>
                                        </div>
                                        <div className="flex gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path d="M14.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/></svg>
                                        </div>
                                    </div>
                                    <div className="flex gap-7 mt-3">
                                        <span className="flex items-center bg-[#202731cc] gap-3 px-5 py-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path d="M14.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/></svg>
                                            <span className="text-xl font-medium">0</span>
                                        </span>
                                        <span className="flex items-center bg-[#202731cc] gap-3 px-5 py-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path d="M14.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/></svg>
                                            <span className="text-xl font-medium">0</span>
                                        </span>
                                    </div>
                                </div>
                            
                                <div className="mt-7">
                                    <button className="flex justify-center items-center gap-2 border border-[#4c5661] text-white text-lg font-semibold w-full py-3 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path d="M14.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M7.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/></svg>
                                        <span>Copy Script</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
