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
							<h2 className="text-white text-xl font-semibold">{title}</h2>
							<div className="flex items-center bg-[#202731cc] text-[#d4dae3] text-lg px-3 py-2 rounded-full gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye">
									<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
									<circle cx="12" cy="12" r="3"></circle>
								</svg>
								<span>2,569 views</span>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row justify-between gap-5">
							<div className="basis-full lg:basis-7/12 mt-4">
								<img src="/images/noFilter.webp" alt="Game Thumbnail" className="w-full rounded-lg" />
							</div>
							<div className="basis-full lg:basis-5/12 flex flex-col justify-between mt-3">
								<div className="flex flex-wrap justify-between gap-5 sm:items-end">
									<div className="nc-PostMeta2 flex flex-wrap items-center text-left text-neutral-700 dark:text-neutral-200 text-base flex-shrink-0 leading-none">
										<a className="flex items-center space-x-2 rtl:space-x-reverse" href="/author/jovica33/">
											<div className="wil-avatar relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden font-semibold uppercase text-neutral-100 shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900" style={{ backgroundColor: 'rgb(255, 76, 76)' }}>
												<span className="wil-avatar__name">j</span>
											</div>
										</a>
										<div className="ms-3">
											<div className="flex items-center">
												<a className="block font-semibold" href="/author/jovica33/">
													jovica33
												</a>
											</div>
											<div className="mt-[6px] flex-wrap text-xs">
												<span className="text-neutral-700 dark:text-neutral-300">Mar 14, 2025</span>
												<span className="mx-2 font-semibold">·</span>
												<span className="text-neutral-700 dark:text-neutral-300">1 min read</span>
											</div>
										</div>
									</div>
									<div className="nc-SingleMetaAction2 ">
										<div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
											<div className="nc-PostCardLikeAndComment flex items-center gap-2 sm:gap-2.5 ">
												<button className="nc-PostCardLikeAction group/PostCardLikeAction relative flex items-center text-xs leading-none transition-colors  text-neutral-700 hover:text-rose-600 dark:text-neutral-200 dark:hover:text-rose-400 " title="Like this post">
													<div className="h-9 w-9  flex flex-shrink-0 items-center justify-center rounded-full transition-colors duration-75 bg-neutral-50 group-hover/PostCardLikeAction:bg-rose-50 dark:bg-neutral-800 dark:group-hover/PostCardLikeAction:bg-rose-100/10">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" className="h-[18px] w-[18px]">
															<path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
														</svg>
													</div>
													<span className="ms-2 min-w-[1.125rem] flex-shrink-0 text-start transition-colors duration-75 text-neutral-900 dark:text-neutral-200">1</span>
												</button>
												<a href="#comments" className="nc-PostCardCommentBtn group/PostCardCommentBtn relative flex items-center text-neutral-600 transition-colors dark:text-neutral-200 hover:text-teal-600 dark:hover:text-teal-500 flex undefined text-xs" title="Comments">
													<div className="flex flex-shrink-0 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-75 group-hover/PostCardCommentBtn:bg-teal-50 dark:bg-neutral-800 dark:group-hover/PostCardCommentBtn:bg-teal-100/10 w-9 h-9">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" className="h-[18px] w-[18px]">
															<path d="M8 13.5H16M8 8.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
															<path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
														</svg>
													</div>
													<span className="ms-2 min-w-[1.125rem] flex-shrink-0 text-start text-neutral-900 transition-colors duration-75 dark:text-neutral-200">0</span>
												</a>
												<div className="nc-PostCardViewCount group/PostCardViewCount relative flex items-center text-neutral-600 transition-colors dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex undefined text-xs" title="Views">
													<div className="flex flex-shrink-0 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-75 group-hover/PostCardViewCount:bg-indigo-50 dark:bg-neutral-800 dark:group-hover/PostCardViewCount:bg-indigo-100/10 w-9 h-9">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" className="h-5 w-5">
															<path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5"></path>
															<path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5"></path>
														</svg>
													</div>
													<span className="ms-2 min-w-[1.125rem] flex-shrink-0 text-start text-neutral-900 transition-colors duration-75 dark:text-neutral-200">17</span>
												</div>
											</div>
											<div className="flex flex-grow items-center justify-end gap-2 sm:gap-2.5">
												<div className="pr-1">
													<div className="h-5 border-s border-neutral-200 sm:h-6 dark:border-neutral-700"></div>
												</div>
												<button className="nc-NcBookmark relative flex items-center justify-center rounded-full h-9 w-9 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200" title="Save to reading list">
													<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" className="z-[1] h-[18px] w-[18px]">
														<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
													</svg>
													<span className="absolute inset-0 rounded-full "></span>
												</button>
												<div className="nc-SocialsShare flex-shrink-0">
													<div className="relative inline-block text-left" data-headlessui-state="">
														<button className="flex flex-shrink-0 items-center justify-center rounded-full text-neutral-700 focus:outline-none dark:text-neutral-200 h-9 w-9 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700" title="Share" id="headlessui-menu-button-:r6:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" className="h-[18px] w-[18px]">
																<path d="M18 7C18.7745 7.16058 19.3588 7.42859 19.8284 7.87589C21 8.99181 21 10.7879 21 14.38C21 17.9721 21 19.7681 19.8284 20.8841C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8841C3 19.7681 3 17.9721 3 14.38C3 10.7879 3 8.99181 4.17157 7.87589C4.64118 7.42859 5.2255 7.16058 6 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
																<path d="M12.0253 2.00052L12 14M12.0253 2.00052C11.8627 1.99379 11.6991 2.05191 11.5533 2.17492C10.6469 2.94006 9 4.92886 9 4.92886M12.0253 2.00052C12.1711 2.00657 12.3162 2.06476 12.4468 2.17508C13.3531 2.94037 15 4.92886 15 4.92886" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
														</button>
													</div>
												</div>
												<div class="">
													<div class="relative inline-block text-left" data-headlessui-state="">
														<button class="flex items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 h-9 w-9 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none" title="More" id="headlessui-menu-button-:r9:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5">
																<path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-7">
									<button className="flex justify-center items-center gap-2 border border-[#4c5661] text-white text-lg font-semibold w-full py-3 rounded-xl">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy">
											<rect x="9" y="9" width="13
