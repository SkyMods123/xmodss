import React, { FC } from 'react'
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
			    <div class="basis-8/12 shadow-lg rounded-lg p-6">
        <div class="bg-[#161b22] border border-[#2f353c] rounded-sm p-3">
            <div class="flex justify-between items-center">
                <h2 class="text-white text-xl font-semibold">{title}</h2>
                <div class="flex items-center bg-[#202731cc] text-[#d4dae3] text-lg px-3 py-2 rounded-full gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>2,569 views</span>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-5">
                <div class="basis-full lg:basis-7/12 mt-4">
                    <img src="{featuredImage?.sourceUrl || ''}" alt="Game Thumbnail" class="w-full rounded-lg" />
                </div>
                <div class="basis-full lg:basis-5/12 flex flex-col justify-between mt-3">
                    <div class="text-white">
                        <div class="flex justify-between">
                            <div>
                                <h1>No6No6No7Verified</h1>
                            </div>
                            <div class="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up">
                                    <path d="M14 9V5a3 3 0 0 0-6 0v4H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3.5l-1.4-7L19 7a3 3 0 0 0-3-3h-2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex gap-7 mt-3">
                            <span class="flex items-center bg-[#202731cc] gap-3 px-5 py-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l7.78 7.78 7.78-7.78a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                <span class="text-xl font-medium">0</span>
                            </span>
                            <span class="flex items-center bg-[#202731cc] gap-3 px-5 py-3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-5 5V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span class="text-xl font-medium">0</span>
                            </span>
                        </div>
                    </div>
                    <div class="mt-7">
                        <button class="flex justify-center items-center gap-2 border border-[#4c5661] text-white text-lg font-semibold w-full py-3 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span>Copy Script</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#161b22] text-white border border-[#2f353c] rounded-sm p-3 mt-4">
            <h3 class="text-3xl font-semibold p-3">Description</h3>
            <p class="font-bold text-lg mt-2 pl-3">Plitch Trainer is a cheat supplier/provider for many games with multiple mods. This has a premium version alongside a free version.</p>
            <div class="text-xl pl-3 pt-5">
                <h3>Features:</h3>
                <ul class="list-disc pl-7 pt-2">
                    <li>view description</li>
                </ul>
            </div>
            <div class="mt-4">
                <a href="#" class="bg-[#0d1116] text-[#818cf8] text-lg px-4 py-2 rounded-lg inline-block">Join No6No6No7's Discord Server</a>
            </div>
        </div>
    </div>
    <div class="basis-4/12 bg-[#161b22] border border-[#2f353c] rounded-sm p-7 mt-5 mx-6">
        <h1 class="text-white font-bold text-3xl pb-7">Similar Scripts</h1>
        <div class="flex gap-5">
            <img height="70" width="130" src="/images/espm.webp" class="rounded-2xl" />
            <div>
                <h2 class="text-white text-lg font-bold">item magnet</h2>
                <h3 class="text-[#a3a3a3] font-semibold">Dead Rails [Alpha]</h3>
                <h4 class="text-[#a3a3a3] font-semibold">3 weeks ago</h4>
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
