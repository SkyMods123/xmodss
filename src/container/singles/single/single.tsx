import { gql } from '../__generated__'
import {
	GetPostSiglePageQuery,
	NcgeneralSettingsFieldsFragmentFragment,
	NcmazFcUserReactionPostActionEnum,
	NcmazFcUserReactionPostNumberUpdateEnum,
} from '../__generated__/graphql'
import { FaustTemplate } from '@faustwp/core'
import SingleContent from '@/container/singles/SingleContent'
import SingleType1 from '@/container/singles/single/single'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'
import { Sidebar } from '@/container/singles/Sidebar'
import PageLayout from '@/container/PageLayout'
import { FOOTER_LOCATION, PRIMARY_LOCATION } from '@/contains/menu'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { NC_MUTATION_UPDATE_USER_REACTION_POST_COUNT } from '@/fragments/mutations'
import { useMutation } from '@apollo/client'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores/store'
import useGetPostsNcmazMetaByIds from '@/hooks/useGetPostsNcmazMetaByIds'
import { TPostCard } from '@/components/Card2/Card2'
import { useRouter } from 'next/router'
import { TCategoryCardFull } from '@/components/CardCategory1/CardCategory1'
import SingleTypeAudio from '@/container/singles/single-audio/single-audio'
import SingleTypeVideo from '@/container/singles/single-video/single-video'
import SingleTypeGallery from '@/container/singles/single-gallery/single-gallery'

const DynamicSingleRelatedPosts = dynamic(
	() => import('@/container/singles/SingleRelatedPosts'),
)
const DynamicSingleType2 = dynamic(
	() => import('../container/singles/single-2/single-2'),
)
const DynamicSingleType3 = dynamic(
	() => import('../container/singles/single-3/single-3'),
)
const DynamicSingleType4 = dynamic(
	() => import('../container/singles/single-4/single-4'),
)
const DynamicSingleType5 = dynamic(
	() => import('../container/singles/single-5/single-5'),
)

const Component: FaustTemplate<GetPostSiglePageQuery> = (props) => {
	//  LOADING ----------
	if (props.loading) {
		return <>Loading...</>
	}

	const router = useRouter()
	const IS_PREVIEW = router.pathname === '/preview'

	// START ----------
	const { isReady, isAuthenticated } = useSelector(
		(state: RootState) => state.viewer.authorizedUser,
	)
	const { viewer } = useSelector((state: RootState) => state.viewer)
	const [isUpdateViewCount, setIsUpdateViewCount] = useState(false)

	useEffect(() => {
		const timeOutUpdateViewCount = setTimeout(() => {
			setIsUpdateViewCount(true)
		}, 5000)

		return () => {
			clearTimeout(timeOutUpdateViewCount)
		}
	}, [])

	const _post = props.data?.post || {}

	// console.log('🚀 ~ file: single.tsx ~ line 68 ~ Component ~ _post', _post)

	const _relatedPosts = (props.data?.posts?.nodes as TPostCard[]) || []
	const _top10Categories =
		(props.data?.categories?.nodes as TCategoryCardFull[]) || []

	const {
		title,
		ncPostMetaData,
		postFormats,
		featuredImage,
		databaseId,
		excerpt,
	} = getPostDataFromPostFragment(_post)

	//
	const {} = useGetPostsNcmazMetaByIds({
		posts: (IS_PREVIEW ? [] : [_post]) as TPostCard[],
	})
	//

	// Query update post view count
	const [handleUpdateReactionCount, { reset }] = useMutation(
		NC_MUTATION_UPDATE_USER_REACTION_POST_COUNT,
		{
			onCompleted: (data) => {
				reset()
			},
		},
	)

	// update view count
	useEffect(() => {
		if (!isReady || IS_PREVIEW || !isUpdateViewCount) {
			return
		}

		// user chua dang nhap, va update view count voi user la null
		if (isAuthenticated === false) {
			handleUpdateReactionCount({
				variables: {
					post_id: databaseId,
					reaction: NcmazFcUserReactionPostActionEnum.View,
					number: NcmazFcUserReactionPostNumberUpdateEnum.Add_1,
				},
			})
			return
		}

		// user da dang nhap, va luc nay viewer dang fetch.
		if (!viewer?.databaseId) {
			return
		}

		// khi viewer fetch xong, luc nay viewer da co databaseId, va se update view count voi user la viewer
		handleUpdateReactionCount({
			variables: {
				post_id: databaseId,
				reaction: NcmazFcUserReactionPostActionEnum.View,
				number: NcmazFcUserReactionPostNumberUpdateEnum.Add_1,
				user_id: viewer?.databaseId,
			},
		})
	}, [
		databaseId,
		isReady,
		isAuthenticated,
		viewer?.databaseId,
		IS_PREVIEW,
		isUpdateViewCount,
	])

	const renderHeaderType = () => {
		const pData = { ...(_post || {}) }

		if (postFormats === 'audio') {
			return <SingleTypeAudio post={pData} />
		}
		if (postFormats === 'video') {
			return <SingleTypeVideo post={pData} />
		}
		if (postFormats === 'gallery') {
			return <SingleTypeGallery post={pData} />
		}

		if (ncPostMetaData?.template?.[0] === 'style2') {
			return <DynamicSingleType2 post={pData} />
		}
		if (ncPostMetaData?.template?.[0] === 'style3') {
			return <DynamicSingleType3 post={pData} />
		}
		if (ncPostMetaData?.template?.[0] === 'style4') {
			return <DynamicSingleType4 post={pData} />
		}
		if (ncPostMetaData?.template?.[0] === 'style5') {
			return <DynamicSingleType5 post={pData} />
		}
		return (
			<SingleType1
				showRightSidebar={!!ncPostMetaData?.showRightSidebar}
				post={pData}
			/>
		)
	}

	return (
		<>
			<PageLayout
				headerMenuItems={props.data?.primaryMenuItems?.nodes || []}
				footerMenuItems={props.data?.footerMenuItems?.nodes || []}
				pageFeaturedImageUrl={featuredImage?.sourceUrl}
				pageTitle={title}
				pageDescription={excerpt || ''}
				generalSettings={
					props.data?.generalSettings as NcgeneralSettingsFieldsFragmentFragment
				}
			>
				{/* RELATED POSTS */}
				<DynamicSingleRelatedPosts
					posts={_relatedPosts}
					postDatabaseId={databaseId}
				/>
				{ncPostMetaData?.showRightSidebar ? (
					<div>
						<div className={`relative`}>
							{renderHeaderType()}
							
							{/* RELATED POSTS */}
							<DynamicSingleRelatedPosts
								posts={_relatedPosts}
								postDatabaseId={databaseId}
							/>
						</div>
					</div>
				) : (
					<div>
						{renderHeaderType()}

						<div className="container mt-10">
							{/* SINGLE MAIN CONTENT */}
							<SingleContent post={_post} />
						</div>

						{/* RELATED POSTS */}
						<DynamicSingleRelatedPosts
							posts={_relatedPosts}
							postDatabaseId={databaseId}
						/>
					</div>
				)}
			</PageLayout>
		</>
	)
}

Component.variables = ({ databaseId }, ctx) => {
	return {
		databaseId,
		post_databaseId: Number(databaseId || 0),
		asPreview: ctx?.asPreview,
		headerLocation: PRIMARY_LOCATION,
		footerLocation: FOOTER_LOCATION,
	}
}

Component.query = gql(`
  query GetPostSiglePage($databaseId: ID!, $post_databaseId: Int,$asPreview: Boolean = false, $headerLocation: MenuLocationEnum!, $footerLocation: MenuLocationEnum!) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
		...NcmazFcPostFullVsEditorBlocksNoContentFields
    }
    posts(where: {isRelatedOfPostId:$post_databaseId}) {
      nodes {
      ...PostCardFieldsNOTNcmazMEDIA
      }
    }
    categories(first:10, where: { orderby: COUNT, order: DESC }) {
      nodes {
        ...NcmazFcCategoryFullFieldsFragment
      }
    }
    generalSettings {
      ...NcgeneralSettingsFieldsFragment
    }
    primaryMenuItems: menuItems(where: {location:$headerLocation}, first: 80) {
      nodes {
        ...NcPrimaryMenuFieldsFragment
      }
    }
    footerMenuItems: menuItems(where: {location:$footerLocation}, first: 40) {
      nodes {
        ...NcFooterMenuFieldsFragment
      }
    }
  }
`)

export default Component



import React, { FC } from 'react';
import Head from 'next/head';
import Tag from '@/components/Tag/Tag'
import NcImage from '@/components/NcImage/NcImage';
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment';
import SingleHeader from '../SingleHeader';
import { FragmentTypePostFullFields } from '@/container/type';
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta';

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
        tags,
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
            <div className="bg-background __className_3a0388 min-h-screen">
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
                                                                <h2 className="text-neutral-900 truncate text-xl font-bold sm:text-2xl dark:text-neutral-100">{title}</h2>
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
                                                        <PostCardMeta
                                                            className="text-sm"
                                                            meta={{ date, author }}
                                                            hiddenAvatar={false}
                                                            avatarSize="h-7 w-7 text-sm"
                                                        />
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
                                                            className="inline-flex items-center transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 col-span-2 transition-colors duration-200 hover:bg-accent"
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
                                                                    className="lucide lucide-download h-4 w-4"
                                                                >
                                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                                    <line x1="12" x2="12" y1="15" y2="3"></line>
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
                                <section className="script-description">
                                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                                <h2>Description</h2>
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0 space-y-4">
                                            <div className="flex flex-col gap-2">
                                                <h4 className="text-neutral-900 truncate text-xl font-bold sm:text-2xl dark:text-neutral-100">{content}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <aside className="script-similar-scripts lg:col-span-1">
                                <div className="rounded-lg border text-card-foreground shadow-sm sticky top-20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                    <div className="flex flex-col space-y-1.5 p-6 pb-3">
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            <h2>Similar Scripts</h2>
                                        </div>
                                        {tags?.nodes?.length ? (
                                            <div className="mx-auto flex max-w-screen-md flex-wrap">
                                                {tags.nodes.map((item) => (
                                                    <Tag
                                                        hideCount
                                                        key={item.databaseId}
                                                        name={'#' + (item.name || '')}
                                                        uri={item.uri || ''}
                                                        className="mb-2 me-2 border border-neutral-200 dark:border-neutral-800"
                                                    />
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
                <div className={`nc-PageSingle pt-8 lg:pt-16`}>
                    <header className="container rounded-xl">
                        <div className={!hasFeaturedImage && showRightSidebar ? '' : `mx-auto max-w-screen-md`}>
                            <SingleHeader post={{ ...post }} />
                            {!hasFeaturedImage && (
                                <div className="my-5 border-b border-neutral-200 dark:border-neutral-800" />
                            )}
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
};

export default SingleType1;
