import dynamic from 'next/dynamic'
import { TPostCard } from '@/components/Card2/Card2'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores/store'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { NC_MUTATION_UPDATE_USER_REACTION_POST_COUNT } from '@/fragments/mutations'
import {
    GetPostSiglePageQuery,
    NcmazFcUserReactionPostActionEnum,
    NcmazFcUserReactionPostNumberUpdateEnum,
} from '../__generated__/graphql'
import PageLayout from '@/container/PageLayout'
import { FOOTER_LOCATION, PRIMARY_LOCATION } from '@/contains/menu'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'

const DynamicSingleRelatedPosts = dynamic(
    () => import('@/container/singles/SingleRelatedPosts'),
)

const SingleType1: FaustTemplate<GetPostSiglePageQuery> = (props) => {
    //  LOADING ----------
    if (props.loading) {
        return <>Loading...</>
    }

    const router = useRouter()
    const IS_PREVIEW = router.pathname === '/preview'

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

    const _relatedPosts = (props.data?.posts?.nodes as TPostCard[]) || []

    const {
        databaseId,
    } = getPostDataFromPostFragment(_post)

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

    return (
        <>
            <PageLayout
                headerMenuItems={props.data?.primaryMenuItems?.nodes || []}
                footerMenuItems={props.data?.footerMenuItems?.nodes || []}
                generalSettings={
                    props.data?.generalSettings
                }
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
