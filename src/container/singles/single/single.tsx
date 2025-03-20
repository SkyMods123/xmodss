'use client'

import { FC, forwardRef, useEffect, useRef, useState } from 'react'
import Tag from '@/components/Tag/Tag'
import SingleAuthor from './SingleAuthor'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import PostCardLikeAction from '@/components/PostCardLikeAction/PostCardLikeAction'
import PostCardCommentBtn from '@/components/PostCardCommentBtn/PostCardCommentBtn'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { GetPostSiglePageQuery } from '@/__generated__/graphql'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'
import NcBookmark from '@/components/NcBookmark/NcBookmark'
import SingleCommentWrap from './SingleCommentWrap'
import { Transition } from '@headlessui/react'
import TableContentAnchor from './TableContentAnchor'
import Alert from '@/components/Alert'
import { clsx } from 'clsx'
import { useMusicPlayer } from '@/hooks/useMusicPlayer'
import { flatListToHierarchical } from '@faustwp/core'
import MyWordPressBlockViewer from '@/components/MyWordPressBlockViewer'
import { ContentBlock } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer'

const DynamicSingleRelatedPosts = dynamic(
    () => import('@/container/singles/SingleRelatedPosts')
)

const SingleType1 = ({ data, isAuthenticated, handleUpdateReactionCount, isReady }) => {
    const _post = data?.post || {}
    const _relatedPosts = (data?.posts?.nodes as TPostCard[]) || []
    const { databaseId } = getPostDataFromPostFragment(_post)

    // update view count
    useEffect(() => {
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

        // khi viewer fetch xong, luc nay viewer da co databaseId, va se update view count voi user la viewer
        handleUpdateReactionCount({
            variables: {
                post_id: databaseId,
                number: NcmazFcUserReactionPostNumberUpdateEnum.Add_1,
            },
        })
    }, [databaseId, isReady])

    return (
        <>
            <PageLayout>
                <DynamicSingleRelatedPosts
                    posts={_relatedPosts}
                    postDatabaseId={databaseId}
                />
            </PageLayout>
        </>
    )
}

export default SingleType1
