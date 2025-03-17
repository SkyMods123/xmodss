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
			<div className="bg-black min-h-screen flex flex-col lg:flex-row lg justify-center p-6 px-0 lg:px-12">
				<div className="basis-8/12 shadow-lg rounded-lg p-6">
					<div className="bg-[#161b22] border border-[#2f353c] rounded-sm p-3">
						<div className="flex justify-between items-center">
							<h2 className="text-white text-xl font-semibold">Plitch Trainer</h2>
							<div className="flex items-center bg-[#202731cc] text-[#d4dae3] text-lg px-3 py-2 rounded-full gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
								<span>2,569 views</span>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row justify-between gap-5">
							<div className="basis-full lg:basis-7/12 mt-4">
								<img src="/images/noFilter.webp" alt="Game Thumbnail" className="w-full rounded-lg" />
							</div>
							<div className="basis-full lg:basis-5/12 flex flex-col justify-between mt-3">
								<div className="text-white">
									<div className="flex justify-between">
										<div>
											<h1>No6No6No7Verified</h1>
										</div>
										<div className="flex gap-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 cursor-pointer"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
										</div>
									</div>
									<div className="flex gap-7 mt-3">
										<span className="flex items-center bg-[#202731cc] gap-3 px-5 py-3 rounded-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up null"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
											<span className="text-xl font-medium">0</span>
										</span>
										<span className="flex items-center bg-[#202731cc] gap-3 px-5 py-3 rounded-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-down null"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
											<span className="text-xl font-medium">0</span>
										</span>
									</div>
								</div>
								<div className="mt-7">
									<button className="flex justify-center items-center gap-2 border border-[#4c5661] text-white text-lg font-semibold w-full py-3 rounded-xl">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
										<span>Copy Script</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-[#161b22] text-white border border-[#2f353c] rounded-sm p-3 mt-4">
						<h3 className="text-3xl font-semibold p-3">Description</h3>
						<p className="font-bold text-lg mt-2 pl-3">Plitch Trainer is a cheat supplier/provider for many games with multiple mods. This has a premium version alongside a free version.</p>
						<div className="text-xl pl-3 pt-5">
							<h3>Features:</h3>
							<ul className="list-disc pl-7 pt-2">
								<li>view description</li>
							</ul>
						</div>
						<div className="mt-4">
							<a href="#" className="bg-[#0d1116] text-[#818cf8] text-lg px-4 py-2 rounded-lg inline-block">Join No6No6No7's Discord Server</a>
						</div>
					</div>
				</div>
				<div className="basis-4/12 bg-[#161b22] border border-[#2f353c] rounded-sm p-7 mt-5 mx-6">
					<h1 className="text-white font-bold text-3xl pb-7">Similar Scripts</h1>
					<div className="flex gap-5">
						<img height="70" width="130" src="/images/espm.webp" className="rounded-2xl" />
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
