import { TPostCard } from '@/components/Card2/Card2'
import { MagazineLayoutType } from '@/wp-blocks/NcmazFaustBlockMagazineClient'
import { useEffect, useRef, useState } from 'react'

const RelatedPosts = ({ postId }) => {
	const [data, setData] = useState<TPostCard[]>([])
	const [error, setError] = useState(null)
	const [height, setHeight] = useState<number>()
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const relatedPosts = await fetchRelatedPosts(postId)
				setData(relatedPosts)
			} catch (err) {
				setError(err)
			}
		}
		fetchData()
	}, [postId])

	useEffect(() => {
		// Prati promene visine div elementa
		const observer = new MutationObserver((mutationsList, observer) => {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList') {
					setTimeout(() => {
						const h = ref.current?.getBoundingClientRect().height
						setHeight(h)
					}, 100)
				}
			}
		})
		const config = { childList: true }
		observer.observe(ref.current, config)
		return () => {
			observer.disconnect()
		}
	}, [ref])

	useEffect(() => {
		// Pass the message to the parent
		setTimeout(() => {
			window.parent.postMessage(
				{
					type: 'related-posts-iframe-height',
					height,
				},
				'*',
			)
		}, 200)
	}, [height])

	return (
		<div ref={ref} className="no-prose relative">
			{!!data?.length && (
				<MagazineLayoutType
					posts={data}
					error={error}
					blockVariation="related-posts"
				/>
			)}
			<div className="absolute inset-0 z-[1] bg-transparent" />
		</div>
	)
}

export default RelatedPosts
