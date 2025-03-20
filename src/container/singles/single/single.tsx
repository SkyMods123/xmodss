import React, { FC } from 'react';
import Head from 'next/head';
import Tag from '@/components/Tag/Tag'
import NcImage from '@/components/NcImage/NcImage';
import { getPostDataFromPostFragment } from '@/utils/getPostDataFromPostFragment';
import SingleHeader from '../SingleHeader';
import { FragmentTypePostFullFields } from '@/container/type';
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta';
import { FC } from 'react'
import Card2, { TPostCard } from '@/components/Card2/Card2'
import Card6 from '@/components/Card6/Card6'

export interface SingleType1Props {
	posts: TPostCard[]
	className?: string
}

const Components: FC<FC<SingleType1Props>> = ({ posts, className = '' }) => {
	return (
		<div className={`nc-SectionMagazine1 ${className}`}>
			{!posts.length ? (
				<Empty />
			) : (
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:gap-7">
					{posts[0] && <Card2 size="large" post={posts[0]} />}
					<div className="grid gap-6 2xl:gap-7">
						{posts
							.filter((_, i) => i < 4 && i > 0)
							.map(item => (
								<Card6 key={item.databaseId} post={item} />
							))}
					</div>
					{posts
						.filter((_, i) => i >= 4)
						.map(item => (
							<Card6 key={item.databaseId} post={item} />
						))}
				</div>
			)}
		</div>
	)
}

export default SingleType1;
