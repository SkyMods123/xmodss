import dynamic from 'next/dynamic'
import { TPostCard } from '@/components/Card2/Card2'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores/store'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { NC_MUTATION_UPDATE_USER_REACTION_POST_COUNT } from '@/fragments/mutations'
import PageLayout from '@/container/PageLayout'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'

const DynamicSingleRelatedPosts = dynamic(
    () => import('@/container/singles/SingleRelatedPosts'),
)


    const _post = props.data?.post || {}

    const _relatedPosts = (props.data?.posts?.nodes as TPostCard[]) || []

    const {
        databaseId,
    } = getPostDataFromPostFragment(_post)

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
    }, [
        databaseId,
        isReady,
    ])

    return (
        <>
            <PageLayout
            >
                <DynamicSingleRelatedPosts
                    posts={_relatedPosts}
                    postDatabaseId={databaseId}
                />
            </PageLayout>
        </>
    )
}
export default SingleType1
