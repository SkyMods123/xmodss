import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment'
import useGetPostsNcmazMetaByIds from '@/hooks/useGetPostsNcmazMetaByIds'
import { NcmazFcUserReactionPostActionEnum, NcmazFcUserReactionPostNumberUpdateEnum } from '@/__generated__'
import SingleTypeAudio from '@/components/SingleTypeAudio'
import SingleTypeGallery from '@/components/SingleTypeGallery'
import SingleTypeVideo from '@/components/SingleTypeVideo'
import DynamicSingleType2 from '@/components/DynamicSingleType2'
import DynamicSingleType3 from '@/components/DynamicSingleType3'
import DynamicSingleType4 from '@/components/DynamicSingleType4'
import DynamicSingleType5 from '@/components/DynamicSingleType5'
import SingleType1 from '@/components/SingleType1'

const Component: React.FC<any> = (props) => {
    const _post = props.data?.post || {}
    const _relatedPosts = (props.data?.posts?.nodes as TPostCard[]) || []
    const _top10Categories = (props.data?.categories?.nodes as TCategoryCardFull[]) || []

    const {
        title,
        ncPostMetaData,
        postFormats,
        featuredImage,
        databaseId,
        excerpt,
    } = getPostDataFromPostFragment(_post)

    const {} = useGetPostsNcmazMetaByIds({
        posts: (IS_PREVIEW ? [] : [_post]) as TPostCard[],
    })

    const [handleUpdateReactionCount, { reset }] = useMutation(
        NC_MUTATION_UPDATE_USER_REACTION_POST_COUNT,
        {
            onCompleted: (data) => {
                reset()
            },
        },
    )

    useEffect(() => {
        if (!isReady || IS_PREVIEW || !isUpdateViewCount) {
            return
        }

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

        if (!viewer?.databaseId) {
            return
        }

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

    return <div>{renderHeaderType()}</div>
}

export default Component