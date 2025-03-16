import React, { FC, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostMeta2 from '@/components/PostMeta2/PostMeta2'
import { SingleType1Props } from '../single/single'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'
import SingleTitle from '../SingleTitle'
import SingleMetaAction2 from '../SingleMetaAction2'
import MyImage from '@/components/MyImage'

interface Props extends SingleType1Props {}

const SingleTypeVideo: FC<Props> = ({ post }) => {
	const {
		title,
		featuredImage,
		categories,
		excerpt,
		ncmazVideoUrl,
		postFormats,
	} = getPostDataFromPostFragment(post || {})

	const [isRendered, setIsRendered] = useState(false)

	useEffect(() => {
		setIsRendered(true)
	}, [])

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
			) : null
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
			)
		}
		return null
	}

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
		)
	}

	return (
		<>
			<header className="container relative flex flex-col py-14 xl:flex-row xl:items-center xl:py-20">
				{/* Dodano dugme */}
				<button onClick={() => alert('Button clicked!')} className="px-4 py-2 bg-blue-500 text-white rounded">
					Click Me
				</button>
				{/* Dodan HTML kod */}
				<div className="min-h-screen bg-background">
					<nav className="sticky top-0 z-50 hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block">
						<div className="container flex h-14 items-center lg:px-14">
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10" aria-label="Go back">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left h-4 w-4">
									<path d="m15 18-6-6 6-6"></path>
								</svg>
								<span className="sr-only">Go back</span>
							</button>
							<span className="ml-4 text-lg font-semibold">ESP (Free)</span>
						</div>
					</nav>
					<main className="container px-4 py-6 lg:px-14">
						{/* Ostatak HTML koda */}
					</main>
				</div>
				{/*  */}
				<div className="nc-PageSingleVideo__headerWrap absolute inset-y-0 end-1/2 w-screen translate-x-1/2 transform bg-neutral-900 xl:w-[calc(100vw/2)] xl:translate-x-0 xl:rounded-e-[40px] dark:bg-black"></div>
				<div className="relative pb-10 xl:pb-0 xl:pr-10">{renderHeader()}</div>
				<div className="relative flex-shrink-0 xl:w-8/12">
					<div className="aspect-h-16 aspect-w-16 z-0 overflow-hidden rounded-3xl border-4 border-neutral-300 bg-neutral-800 shadow-2xl sm:aspect-h-9 dark:border-neutral-800">
						{renderMainVideo()}
					</div>
				</div>

				<div className="z-10 space-y-6 lg:col-span-2">
					<header className="!mt-0">
						<div className="rounded-lg border text-card-foreground shadow-sm bg-card/70 backdrop-blur-sm">
							<div className="flex flex-col space-y-1.5 p-6 pb-4">
								<div className="flex flex-col gap-1">
									<div className="flex items-center justify-between gap-3">
										<div className="flex min-w-0 items-center gap-3">
											<img alt="Game icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="flex-shrink-0 rounded-lg" style="color:transparent" srcSet="/_next/image?url=https%3A%2F%2Ftr.rbxcdn.com%2F180DAY-2bb40bb06d20b6fd38cdd2c19ec2ba61%2F128%2F128%2FImage%2FWebp%2FnoFilter&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Ftr.rbxcdn.com%2F180DAY-2bb40bb06d20b6fd38cdd2c19ec2ba61%2F128%2F128%2FImage%2FWebp%2FnoFilter&amp;w=64&amp;q=75 2x" src="./Dead Rails Alpha _ ESP (Free) - Roblox Scripts _ Rscripts.net_files/noFilter.webp" />
											<div className="min-w-0">
												<div className="text-2xl font-semibold leading-none tracking-tight">
													<h1 className="truncate text-xl font-bold sm:text-2xl">ESP (Free)</h1>
												</div>
											</div>
										</div>
										<div className="hidden shrink-0 items-center gap-2 md:flex">
											<div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/15">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye mr-1 h-3.5 w-3.5"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>2,491 views
											</div>
										</div>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<a aria-label="Search for game" className="hover:text-green-500 hover:underline" href="https://rscripts.net/scripts?q=Dead%20Rails%20Alpha">Dead Rails Alpha</a>
										<span>•</span>
										<div className="flex items-center gap-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-3.5 w-3.5">
												<circle cx="12" cy="12" r="10"></circle>
												<polyline points="12 6 12 12 16 14"></polyline>
											</svg>2 days ago
										</div>
									</div>
								</div>
							</div>
							<div className="p-6 pt-0">
								<div className="flex flex-col gap-6 lg:flex-row">
									<div className="group relative w-full overflow-hidden rounded-lg lg:w-7/12">
										<img alt="Script preview thumbnail" fetchpriority="high" loading="eager" width="640" height="360" decoding="async" data-nimg="1" className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105" style={{color: "transparent", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(_data_image/svg%2bxml%3bcharset%3dutf-8%2c_svg%20xmlns%3d%27http_/www.w3.org/2000/svg%27%20viewBox%3d%270%200%20640%20360%27__filter%20id%3d%27b%27%20color/__feColorMatrix%20values%3d%271%200%200%200%200%200%201%200%200%200%200%200/__feFloo/filter__image%20width%3d%2710);'", href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='/%3E%3C/svg%3E&quot;)"} srcSet="/_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=640&amp;q=85 1x, /_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=1920&amp;q=85 2x" src="./Dead Rails Alpha _ ESP (Free) - Roblox Scripts _ Rscripts.net_files/67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW(1).jpeg" />
										<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
										<div className="absolute bottom-3 left-3 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Script Preview</div>
										<div className="absolute right-3 top-3 flex flex-col items-end gap-2">
											<button data-state="closed">
												<div className="text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xl border border-blue-400 bg-background/80 px-2 py-1 text-blue-300 shadow-sm shadow-neutral-700 backdrop-blur-sm hover:bg-background hover:opacity-90 flex items-center" aria-label="Mobile Friendly">
													<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone mx-1">
														<rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
														<path d="M12 18h.01"></path>
													</svg><span>Mobile Friendly</span>
												</div>
												<span className="sr-only">Mobile Friendly</span>
											</button>
										</div>
									</div>
									<div className="flex flex-col justify-between gap-4 lg:w-5/12">
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<a className="flex items-center gap-2" href="https://rscripts.net/@0x256">
													<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
														<span className="flex h-full w-full items-center justify-center rounded-full bg-muted">0x</span>
													</span>
													<span className="flex cursor-pointer items-center gap-1 text-base font-medium text-foreground hover:text-primary">0x256</span>
												</a>
												<div className="flex items-center gap-2">
													<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 hover:bg-muted" title="Share" aria-label="Share" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R6b8j77rrqaba:" data-state="closed">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 h-4 w-4">
															<circle cx="18" cy="5" r="3"></circle>
															<circle cx="6" cy="12" r="3"></circle>
															<circle cx="18" cy="19" r="3"></circle>
															<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
															<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
														</svg><span className="sr-only">Share</span>
													</button>
												</div>
											</div>
											<div className="flex items-center gap-3">
												<div className="ml-0 flex gap-1">
													<button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 relative flex w-1/2 items-center gap-2 md:w-auto" aria-label="Like">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke
